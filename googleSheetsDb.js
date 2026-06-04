const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// Paths for configurations and fallback JSON database
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const CONFIG_PATH = path.join(__dirname, 'google_sheets_config.json');
const LOCAL_MOCK_PATH = path.join(__dirname, 'local_sheets_mock.json');

class GoogleSheetsDb {
  constructor() {
    this.spreadsheetId = '';
    this.authClient = null;
    this.sheetsApi = null;
    
    this.loadConfiguration();
    this.initLocalMock();
    this.initGoogleSheetsApi();
  }

  // Load spreadsheet configuration from config file
  loadConfiguration() {
    if (fs.existsSync(CONFIG_PATH)) {
      try {
        const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
        this.spreadsheetId = config.spreadsheetId || '';
        console.log(`[GoogleSheetsDb] Config loaded. Spreadsheet ID: ${this.spreadsheetId}`);
      } catch (err) {
        console.error(`[GoogleSheetsDb] Error parsing config file: ${err.message}`);
      }
    } else {
      this.spreadsheetId = '';
    }
  }

  // Initialize the local mock backup file with the Smart Mat Schema
  initLocalMock() {
    if (!fs.existsSync(LOCAL_MOCK_PATH)) {
      const initialData = {
        sheetName: "SensorTelemetryLogs",
        headers: ["Timestamp", "MemberID", "Step_Count", "Left_Pressure", "Right_Pressure", "Balance_Score"],
        rows: []
      };
      fs.writeFileSync(LOCAL_MOCK_PATH, JSON.stringify(initialData, null, 2), 'utf-8');
      console.log(`[GoogleSheetsDb] Local Fallback DB (Smart Mat Schema) initialized at: ${LOCAL_MOCK_PATH}`);
    }
  }

  // Setup Official Google Sheets API (v4) JWT Auth if credentials.json is provided
  initGoogleSheetsApi() {
    if (fs.existsSync(CREDENTIALS_PATH)) {
      try {
        console.log(`[GoogleSheetsDb] credentials.json detected. Setting up Google Sheets API (v4) JWT Auth...`);
        const keys = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf-8'));
        
        this.authClient = new google.auth.JWT(
          keys.client_email,
          null,
          keys.private_key,
          ['https://www.googleapis.com/auth/spreadsheets']
        );
        
        this.sheetsApi = google.sheets({ version: 'v4', auth: this.authClient });
        console.log(`[GoogleSheetsDb] Official Google Sheets API (v4) successfully initialized.`);
      } catch (err) {
        console.error(`[GoogleSheetsDb] Failed initializing Google Sheets API: ${err.message}`);
        this.authClient = null;
        this.sheetsApi = null;
      }
    } else {
      console.log(`[GoogleSheetsDb] credentials.json not found. Official Google Sheets API v4 inactive. (Local Fallback active)`);
    }
  }

  // Check if official Sheets API v4 is fully active
  isSheetsApiActive() {
    return this.sheetsApi !== null && this.spreadsheetId && this.spreadsheetId.trim() !== '';
  }

  // Append a smart mat sensor telemetry record to the active database
  async appendSensorRecord(memberId, stepCount, leftPressure, rightPressure, balanceScore) {
    const timestamp = new Date().toISOString();
    
    // Mode 1: Official Google Sheets API v4
    if (this.isSheetsApiActive()) {
      try {
        console.log(`[GoogleSheetsDb][v4 API] Appending sensor: Member=${memberId}, Steps=${stepCount}, Balance=${balanceScore}`);
        
        await this.sheetsApi.spreadsheets.values.append({
          spreadsheetId: this.spreadsheetId,
          range: '센서데이터!A:F',
          valueInputOption: 'USER_ENTERED',
          insertDataOption: 'INSERT_ROWS',
          resource: {
            values: [[
              timestamp, 
              memberId, 
              Number(stepCount), 
              Number(leftPressure), 
              Number(rightPressure), 
              Number(balanceScore)
            ]]
          }
        });
        
        return { success: true, mode: 'google_sheets_v4_api', timestamp };
      } catch (err) {
        console.error(`[GoogleSheetsDb][v4 API] Appending failed: ${err.message}. Falling back...`);
        // Fallback to local mock if API fails
      }
    }
    
    // Mode 2: Local Fallback Backup Mode
    return await this.appendLocalMock(timestamp, memberId, stepCount, leftPressure, rightPressure, balanceScore);
  }

  // Append to local backup JSON file
  async appendLocalMock(timestamp, memberId, stepCount, leftPressure, rightPressure, balanceScore) {
    try {
      const fileData = await fs.promises.readFile(LOCAL_MOCK_PATH, 'utf-8');
      const db = JSON.parse(fileData);
      
      const newRow = {
        Timestamp: timestamp,
        MemberID: memberId,
        Step_Count: Number(stepCount),
        Left_Pressure: Number(leftPressure),
        Right_Pressure: Number(rightPressure),
        Balance_Score: Number(balanceScore)
      };
      
      db.rows.push(newRow);
      
      // Cap log size to 5000 rows
      if (db.rows.length > 5000) {
        db.rows.shift();
      }
      
      await fs.promises.writeFile(LOCAL_MOCK_PATH, JSON.stringify(db, null, 2), 'utf-8');
      return { success: true, mode: 'local_fallback', timestamp };
    } catch (err) {
      console.error(`[GoogleSheetsDb] Critical failed writing to local mock: ${err.message}`);
      return { success: false, error: err.message };
    }
  }

  // Read all telemetry records from the active database
  async readSensorRecords(memberId = null) {
    // Mode 1: Official Google Sheets API v4
    if (this.isSheetsApiActive()) {
      try {
        console.log(`[GoogleSheetsDb][v4 API] Reading rows...`);
        const response = await this.sheetsApi.spreadsheets.values.get({
          spreadsheetId: this.spreadsheetId,
          range: '센서데이터!A:F'
        });
        
        const rows = response.data.values;
        if (rows && rows.length > 1) {
          const parsed = [];
          
          for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const rowObj = {
              timestamp: row[0],
              memberId: row[1],
              stepCount: Number(row[2] || 0),
              leftPressure: Number(row[3] || 0),
              rightPressure: Number(row[4] || 0),
              balanceScore: Number(row[5] || 0)
            };
            
            if (!memberId || rowObj.memberId === memberId) {
              parsed.push(rowObj);
            }
          }
          return parsed;
        }
        return [];
      } catch (err) {
        console.error(`[GoogleSheetsDb][v4 API] Fetching failed: ${err.message}. Falling back...`);
      }
    }
    
    // Mode 2: Local Fallback Backup Mode
    return await this.readLocalMock(memberId);
  }

  // Read from local backup JSON file
  async readLocalMock(memberId = null) {
    try {
      const fileData = await fs.promises.readFile(LOCAL_MOCK_PATH, 'utf-8');
      const db = JSON.parse(fileData);
      
      let rows = db.rows;
      if (memberId) {
        rows = rows.filter(r => r.MemberID === memberId);
      }
      
      return rows.map(r => ({
        timestamp: r.Timestamp,
        memberId: r.MemberID,
        stepCount: Number(r.Step_Count || 0),
        leftPressure: Number(r.Left_Pressure || 0),
        rightPressure: Number(r.Right_Pressure || 0),
        balanceScore: Number(r.Balance_Score || 0)
      }));
    } catch (err) {
      console.error(`[GoogleSheetsDb] Local reading failed: ${err.message}`);
      return [];
    }
  }

  // Hourly Aggregation Service: Group data into 24-hourly bins for the time-series UI chart
  async getHourlyAggregations(memberId, hoursLimit = 24) {
    const rawData = await this.readSensorRecords(memberId);
    const hourlyBins = Array(24).fill(0);
    const now = new Date();
    const cutoffTime = new Date(now.getTime() - hoursLimit * 60 * 60 * 1000);
    
    rawData.forEach(row => {
      const rowTime = new Date(row.timestamp);
      if (rowTime >= cutoffTime) {
        // KST 시간으로 변환 (UTC+9)
        const hour = (rowTime.getUTCHours() + 9) % 24;
        hourlyBins[hour] += row.stepCount || 1;
      }
    });
    
    const result = hourlyBins.map((steps) => {
      return steps > 0 ? Math.min(100, Math.round(steps)) : 0;
    });
    
    return result;
  }

  async getLatestTelemetry(memberId) {
    const rawData = await this.readSensorRecords(memberId);
    if (rawData.length > 0) {
      rawData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      return rawData[0];
    }
    
    return {
      timestamp: new Date().toISOString(),
      memberId: memberId,
      stepCount: 120,
      leftPressure: 50,
      rightPressure: 50,
      balanceScore: 95
    };
  }
}

module.exports = new GoogleSheetsDb();

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const googleSheetsDb = require('./googleSheetsDb');
const intervalManager = require('./intervalManager');
const simulator = require('./simulator');

const app = express();
const port = 3000;

app.use(express.json());

// Serve static frontend files from current directory
app.use(express.static(path.join(__dirname)));

// --- REST API ENDPOINTS ---

// Ingest sensor readings from Smart Floor Mat Arduino (via POST)
app.post('/api/sensor/data', async (req, res) => {
  const { memberId, stepCount, leftPressure, rightPressure, balanceScore, batteryLevel } = req.body;
  
  if (!memberId || stepCount === undefined || leftPressure === undefined || rightPressure === undefined || balanceScore === undefined) {
    return res.status(400).json({ status: 'error', message: 'Missing required Smart Mat parameters' });
  }
  
  // 1. Write telemetry record to the active Google Sheet or local backup
  const result = await googleSheetsDb.appendSensorRecord(memberId, stepCount, leftPressure, rightPressure, balanceScore);
  
  if (result.success) {
    // 2. Stream raw measurement INSTANTLY to connected WebSocket browser clients for real-time gauge sync!
    broadcastToUi({
      type: 'LIVE_SENSOR_TICK',
      memberId,
      timestamp: result.timestamp,
      stepCount: Number(stepCount),
      leftPressure: Number(leftPressure),
      rightPressure: Number(rightPressure),
      balanceScore: Number(balanceScore),
      batteryLevel: batteryLevel !== undefined ? Number(batteryLevel) : undefined
    });
    
    res.json({
      status: 'success',
      mode: result.mode,
      timestamp: result.timestamp
    });
  } else {
    res.status(500).json({ status: 'error', message: result.error });
  }
});


// Overwrite current aggregation schedule interval (API Hook prepared for AI logical integration)
app.post('/api/config/interval', (req, res) => {
  const { intervalMs, mode } = req.body;
  
  if (mode) {
    intervalManager.setAdaptabilityMode(mode);
    return res.json({
      status: 'success',
      intervalMs: intervalManager.getInterval(),
      mode: intervalManager.mode,
      message: `System synchronized to AI Adaptability Mode: ${mode}`
    });
  }
  
  if (intervalMs) {
    const success = intervalManager.setIntervalMs(Number(intervalMs));
    if (success) {
      // Broadcast immediate tick notification to UI
      broadcastToUi({
        type: 'AI_INTERVAL_CHANGED',
        intervalMs: intervalManager.getInterval(),
        mode: intervalManager.mode
      });
      
      return res.json({
        status: 'success',
        intervalMs: intervalManager.getInterval(),
        mode: intervalManager.mode,
        message: 'Sync interval overridden successfully'
      });
    }
  }
  
  res.status(400).json({ status: 'error', message: 'Invalid payload: provide intervalMs or mode' });
});

// Fetch current configurations
app.get('/api/config/interval', (req, res) => {
  res.json({
    intervalMs: intervalManager.getInterval(),
    mode: intervalManager.mode,
    isGoogleSheetActive: googleSheetsDb.isSheetsApiActive()
  });
});

// Trigger manual aggregation tick instantly (for debug/demo)
app.post('/api/config/trigger-tick', async (req, res) => {
  console.log('[Server] Manual aggregation trigger requested...');
  await executeSyncAndBroadcast();
  res.json({ status: 'success', message: 'Aggregation and broadcast completed successfully' });
});

// Create integrated HTTP server
const server = http.createServer(app);

// --- WEBSOCKET SERVICES ---
const wss = new WebSocket.Server({ server });
const connectedClients = new Set();

wss.on('connection', (ws) => {
  connectedClients.add(ws);
  console.log(`[WebSocket] Frontend client connected. Total clients: ${connectedClients.size}`);
  
  // Push current configurations on connection
  ws.send(JSON.stringify({
    type: 'INIT_STATE',
    intervalMs: intervalManager.getInterval(),
    mode: intervalManager.mode,
    isGoogleSheetActive: googleSheetsDb.isSheetsApiActive()
  }));

  ws.on('close', () => {
    connectedClients.delete(ws);
    console.log(`[WebSocket] Frontend client disconnected. Total clients: ${connectedClients.size}`);
  });
});

// Helper to broadcast JSON messages to all connected browser nodes
function broadcastToUi(payload) {
  const jsonString = JSON.stringify(payload);
  connectedClients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(jsonString);
    }
  });
}

// --- SYSTEM SYNC & AGGREGATION BUSINESS LOGIC ---
async function executeSyncAndBroadcast() {
  console.log('[Scheduler] Executing scheduled time-series aggregation from Google Sheets...');
  
  const memberIds = [
    "#7721", "#7722", "#7723", "#7724", 
    "#7725", "#7726", "#7727", "#7728",
    "#7729", "#7730", "#7731", "#7732",
    "#7733", "#7734", "#7735", "#7736"
  ];
  
  for (const mId of memberIds) {
    try {
      // Get aggregated 24h step counts hourly bins
      const aggregatedData = await googleSheetsDb.getHourlyAggregations(mId);
      
      // Fetch latest balance score and step telemetry for active status banner
      const latest = await googleSheetsDb.getLatestTelemetry(mId);
      
      // Broadcast updates to all listening frontend clients
      broadcastToUi({
        type: 'CHART_SYNC',
        memberId: mId,
        data: aggregatedData,
        latestTelemetry: latest,
        intervalMs: intervalManager.getInterval(),
        mode: intervalManager.mode
      });
    } catch (err) {
      console.error(`[Scheduler] Aggregation failed for member ${mId}:`, err);
    }
  }
  
  console.log('[Scheduler] Aggregation and WebSocket synchronization complete.');
}

// --- BOOTSTRAPPING SYSTEM ---
server.listen(port, () => {
  console.log(`================================================================`);
  console.log(`  한걸음케어 Adaptive Smart Mat Server listening on port ${port}`);
  console.log(`  Access UI Console: http://localhost:${port}`);
  console.log(`================================================================`);

  // 1. Start the Adaptive Scheduler Microservice
  intervalManager.start(async () => {
    await executeSyncAndBroadcast();
  });

  // 2. Start the Smart Floor Mat Telemetry Simulation Loop (DISABLED)
  // simulator.start(port, 2500);
});

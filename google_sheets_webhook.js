// ==============================================================
// 한걸음케어 구글 시트 연동 Webhook 스크립트 (Apps Script)
// ==============================================================

function doPost(e) {
  try {
    // 1. 전송받은 데이터 파싱
    var data = JSON.parse(e.postData.contents);
    
    // 2. 현재 활성화된 시트 가져오기
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 3. 첫 번째 줄(헤더)이 비어있다면 자동 생성
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "MemberID", "StepCount", "LeftPressure", "RightPressure", "BalanceScore"]);
      sheet.getRange("A1:F1").setFontWeight("bold").setBackground("#d8f3dc");
    }
    
    // 4. 새로운 데이터를 시트 맨 아래에 추가
    sheet.appendRow([
      data.Timestamp,
      data.MemberID,
      data.Step_Count,
      data.Left_Pressure,
      data.Right_Pressure,
      data.Balance_Score
    ]);
    
    // 5. 성공 메시지 반환
    return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // 에러 발생 시 에러 메시지 반환
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

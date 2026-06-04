// [Step 2] 24시간 카운트다운 타이머 및 상태 관리 로직

const int fsrPin = A5; // 센서 핀
const int ledPin = 13; // 아두이노 내장 LED (알림 표시용)

// 1. 임계값 설정
const int threshold = 800; 

// 2. 타이머 관련 변수
unsigned long lastStepTime = 0; // 마지막으로 밟은 시간을 저장 (ms 단위)

// [테스트용] 24시간을 기다릴 수 없으므로 우선 10초(10000ms)로 설정하여 테스트합니다.
// 나중에 이 값을 (24UL * 60UL * 60UL * 1000UL) 로 변경하면 24시간이 됩니다.
const unsigned long EMERGENCY_TIME = 10000; 

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  pinMode(fsrPin, INPUT_PULLUP);
  
  // 시작할 때 현재 시간을 기록
  lastStepTime = millis();
  
  delay(1000);
  Serial.println("=== [Step 2] 카운트다운 타이머 테스트 (10초) 시작 ===");
  Serial.println("매트를 밟으면 타이머가 초기화됩니다.");
  Serial.println("10초 동안 밟지 않으면 긴급 알림이 발생합니다.");
  Serial.println("--------------------------------------------------");
}

void loop() {
  int fsrReading = analogRead(fsrPin);
  unsigned long currentTime = millis(); // 현재 시간 가져오기
  unsigned long elapsedTime = currentTime - lastStepTime; // 마지막으로 밟은 후 경과된 시간
  
  // 1. 매트 밟힘 감지
  if (fsrReading < threshold) {
    // 밟았으므로 타이머 초기화
    lastStepTime = currentTime;
    
    Serial.println("✅ [정상] 발매트 감지! 생존 신호 확인 (타이머 초기화)");
    digitalWrite(ledPin, LOW); // 평상시엔 LED 꺼둠
    
    // 계속 눌려있을 때 로그가 너무 빨리 올라가는 것을 방지
    delay(1000); 
  }
  
  // 2. 24시간(현재는 10초) 경과 여부 확인 (경고 상태)
  if (elapsedTime >= EMERGENCY_TIME) {
    Serial.print("🚨 [긴급 상황] ");
    Serial.print(EMERGENCY_TIME / 1000);
    Serial.println("초 동안 아무런 움직임이 없습니다! (알림 전송 필요)");
    
    // 시각적 알림: LED 깜빡임
    digitalWrite(ledPin, HIGH);
    delay(250);
    digitalWrite(ledPin, LOW);
    delay(250);
  } else {
    // 3. 정상 카운트다운 상태 (디버깅용 출력)
    // 밟지 않았고 아직 제한 시간이 안 넘었을 때 남은 시간 출력 (1초마다)
    static unsigned long lastPrintTime = 0;
    if (currentTime - lastPrintTime >= 1000) {
      Serial.print("남은 시간: ");
      Serial.print((EMERGENCY_TIME - elapsedTime) / 1000);
      Serial.println("초...");
      lastPrintTime = currentTime;
    }
  }
}

// [Step 1-3] 아두이노 내부 풀업 저항을 활용한 압력 센서 테스트

const int fsrPin = A5; // 사용자님의 연결에 맞춰 A5로 변경
const int ledPin = 13; // 아두이노 내장 LED

// [중요] 내부 풀업 저항을 사용하면 값이 반대로 움직입니다!
// 안 밟았을 때: 약 1023 (최대값)
// 밟았을 때: 저항이 줄어들면서 값이 뚝 떨어짐 (예: 500 이하, 세게 밟으면 100 이하)
const int threshold = 800; // 800보다 '작아지면' 밟은 것으로 판단

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  
  // 아두이노 내부의 저항을 활성화 (별도의 저항 부품 없이 회로 구성 가능)
  pinMode(fsrPin, INPUT_PULLUP); 
  
  delay(1000);
  Serial.println("=== 상태 판별 테스트 (내부 풀업 방식) ===");
}

void loop() {
  int fsrReading = analogRead(fsrPin);
  
  Serial.print("현재 압력 값: ");
  Serial.print(fsrReading);
  
  // 값이 임계값(800)보다 '작아지면' 작동 (반대 논리)
  if (fsrReading < threshold) {
    Serial.println("  =>  ✅ 작동 (밟음)");
    digitalWrite(ledPin, HIGH);
  } else {
    Serial.println("  =>  ❌ 노작동 (안 밟음)");
    digitalWrite(ledPin, LOW);
  }
  
  delay(500);
}

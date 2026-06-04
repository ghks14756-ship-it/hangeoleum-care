import serial
import requests
import time
import sys

# =========================================================
# 설정: 아두이노 포트를 여기에 맞춰 변경해주세요
# 아두이노 IDE 상단 [툴 > 포트] 메뉴에서 확인할 수 있습니다.
# 예: 'COM3', 'COM4', 'COM5'
PORT = 'COM3'
BAUD_RATE = 9600

# 서버 API 주소 (변경 불필요)
API_URL = 'http://localhost:3000/api/sensor/data'

# 데이터를 보낼 테스트 이용자 ID (변경 불필요)
TARGET_MEMBER_ID = '#9999'
# =========================================================

def send_to_server(payload):
    """Node.js 서버에 센서 데이터를 POST 요청으로 전송합니다."""
    try:
        response = requests.post(API_URL, json=payload, timeout=3)
        if response.status_code == 200:
            print(f"  ✅ 서버 전송 성공! → 현재 시각 차트 막대 +10 증가")
        else:
            data = response.json()
            print(f"  ⚠️ 서버 응답 오류 {response.status_code}: {data.get('message', '')}")
    except requests.exceptions.ConnectionError:
        print(f"  ❌ 서버 연결 실패! Node.js 서버(server.js)가 실행 중인지 확인하세요.")
    except Exception as e:
        print(f"  ❌ 전송 오류: {e}")

def main():
    print("=" * 55)
    print("  한걸음케어 아두이노 시리얼 브릿지 v2")
    print("=" * 55)
    print(f"  포트: {PORT} | 대상 이용자: {TARGET_MEMBER_ID}")
    print(f"  아두이노가 연결된 포트를 확인하고 코드 상단 PORT를 맞춰주세요.")
    print("-" * 55)
    print(f"[{PORT}] 연결 시도 중...")

    try:
        ser = serial.Serial(PORT, BAUD_RATE, timeout=1)
        time.sleep(2)  # 아두이노 리셋 대기
        print(f"✅ 아두이노와 연결되었습니다! 센서 입력을 기다리는 중...\n")

        while True:
            if ser.in_waiting > 0:
                try:
                    line = ser.readline().decode('utf-8', errors='ignore').strip()
                except Exception:
                    continue

                if not line:
                    continue

                print(f"[아두이노] {line}")

                # 아두이노에서 "발매트 감지" 텍스트가 출력될 때 서버로 전송
                if "발매트 감지" in line:
                    print(f"  🦶 압력 감지! → 서버로 데이터 전송 중...")

                    # stepCount=1 은 "한 번 밟혔다"는 이벤트 신호
                    # 차트 증가(+10)는 app.js 프론트엔드에서 처리합니다
                    payload = {
                        "memberId": TARGET_MEMBER_ID,
                        "stepCount": 1,
                        "leftPressure": 50,
                        "rightPressure": 50,
                        "balanceScore": 100,
                        "batteryLevel": 99
                    }
                    send_to_server(payload)

            time.sleep(0.05)

    except serial.SerialException as e:
        print(f"\n❌ 시리얼 포트 오류: {e}")
        print("\n[해결 방법]")
        print(f"  1. 아두이노 IDE의 '시리얼 모니터' 창을 닫아주세요 (포트 충돌)")
        print(f"  2. 아두이노가 USB로 PC에 연결되어 있는지 확인하세요.")
        print(f"  3. 아두이노 IDE → [툴 > 포트] 에서 포트 번호를 확인하고")
        print(f"     이 파일(serial_bridge.py) 상단 PORT = '{PORT}' 를 맞게 수정하세요.")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\n\n브릿지 프로그램을 종료합니다.")
    finally:
        if 'ser' in locals() and ser.is_open:
            ser.close()
            print("포트를 닫았습니다.")

if __name__ == '__main__':
    main()

import requests
import json
url = "https://script.google.com/macros/s/AKfycbxNI7scQBZuw7t2yKF_aK3CIUSjJGUR8hOQOxjca6koSfB3QtD3P7q7MHWlMTTUlMmG7w/exec"
data = {
    "Timestamp": "2026-06-07T12:00:00Z",
    "MemberID": "#9999",
    "Step_Count": 1,
    "Left_Pressure": 100,
    "Right_Pressure": 100,
    "Balance_Score": 100
}
try:
    resp = requests.post(url, json=data)
    print("Status:", resp.status_code)
    print("Response:", resp.text)
except Exception as e:
    print("Error:", e)

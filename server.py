import asyncio
import json
import os
import requests
from datetime import datetime, timedelta
from aiohttp import web, WSMsgType
import logging

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("DSU.Server")

PORT = 3000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_FILE = os.path.join(BASE_DIR, "local_sheets_mock.json")

# 구글 시트 연동을 위한 Webhook URL (발급받은 URL을 여기에 붙여넣으세요)
GOOGLE_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxNI7scQBZuw7t2yKF_aK3CIUSjJGUR8hOQOxjca6koSfB3QtD3P7q7MHWlMTTUlMmG7w/exec"

clients = set()

if not os.path.exists(DB_FILE):
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump({"rows": []}, f, indent=2)

def read_db():
    try:
        with open(DB_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except:
        return {"rows": []}

def append_db(row):
    db = read_db()
    db["rows"].append(row)
    if len(db["rows"]) > 5000:
        db["rows"].pop(0)
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump(db, f, indent=2)
        
    # 구글 시트로 백그라운드 전송
    if GOOGLE_WEBHOOK_URL:
        try:
            requests.post(GOOGLE_WEBHOOK_URL, json=row, timeout=3)
            log.info("구글 시트로 실시간 전송 성공!")
        except Exception as e:
            log.error(f"구글 시트 전송 실패: {e}")

def get_minute_aggregations(member_id):
    db = read_db()
    rows = [r for r in db["rows"] if r.get("MemberID") == member_id]
    minute_bins = [0] * 60
    now = datetime.utcnow()
    # We only care about data from the CURRENT hour (KST)
    # Actually, let's just look at the last 60 minutes or the current hour
    # To match "0~59분", we group by the minute of the timestamp if it's within the last hour
    cutoff = now - timedelta(hours=1)
    
    for r in rows:
        try:
            ts_str = r["Timestamp"].replace('Z', '')
            ts = datetime.fromisoformat(ts_str)
            if ts >= cutoff:
                # KST is UTC+9, but minute is the same
                minute = ts.minute
                minute_bins[minute] += int(r.get("Step_Count", 1))
        except Exception as e:
            log.error(f"Time parsing error: {e}")
            
    # For minute bins, we probably don't need to cap at 100, but let's keep it similar
    return [min(100, round(steps)) if steps > 0 else 0 for steps in minute_bins]

def get_latest_telemetry(member_id):
    db = read_db()
    rows = [r for r in db["rows"] if r.get("MemberID") == member_id]
    if rows:
        rows.sort(key=lambda x: x["Timestamp"], reverse=True)
        r = rows[0]
        return {
            "timestamp": r["Timestamp"],
            "memberId": r["MemberID"],
            "stepCount": int(r.get("Step_Count", 0)),
            "leftPressure": int(r.get("Left_Pressure", 0)),
            "rightPressure": int(r.get("Right_Pressure", 0)),
            "balanceScore": int(r.get("Balance_Score", 0))
        }
    return {
        "timestamp": datetime.now().isoformat(),
        "memberId": member_id,
        "stepCount": 120,
        "leftPressure": 50,
        "rightPressure": 50,
        "balanceScore": 95
    }

async def broadcast(message):
    data = json.dumps(message)
    for ws in list(clients):
        if not ws.closed:
            await ws.send_str(data)

async def handle_sensor_data(request):
    try:
        data = await request.json()
        member_id = data.get("memberId")
        if not member_id:
            return web.json_response({"status": "error", "message": "Missing memberId"}, status=400)
            
        timestamp = datetime.now().isoformat() + "Z"
        row = {
            "Timestamp": timestamp,
            "MemberID": member_id,
            "Step_Count": data.get("stepCount", 1),
            "Left_Pressure": data.get("leftPressure", 50),
            "Right_Pressure": data.get("rightPressure", 50),
            "Balance_Score": data.get("balanceScore", 100)
        }
        append_db(row)
        
        await broadcast({
            "type": "LIVE_SENSOR_TICK",
            "memberId": member_id,
            "timestamp": timestamp,
            "stepCount": row["Step_Count"],
            "leftPressure": row["Left_Pressure"],
            "rightPressure": row["Right_Pressure"],
            "balanceScore": row["Balance_Score"],
            "batteryLevel": data.get("batteryLevel")
        })
        
        aggregated = get_minute_aggregations(member_id)
        latest = get_latest_telemetry(member_id)
        
        await broadcast({
            "type": "CHART_SYNC",
            "memberId": member_id,
            "data": aggregated,
            "latestTelemetry": latest,
            "intervalMs": 0,
            "mode": "local_fallback"
        })
        
        return web.json_response({"status": "success", "mode": "local_fallback", "timestamp": timestamp})
    except Exception as e:
        log.error(f"Error: {e}")
        return web.json_response({"status": "error", "message": str(e)}, status=500)

async def handle_hourly(request):
    member_id = request.match_info['memberId']
    hourly_data = get_minute_aggregations(member_id)
    latest = get_latest_telemetry(member_id)
    return web.json_response({
        "status": "success", 
        "memberId": member_id, 
        "hourlyData": hourly_data, 
        "latestTelemetry": latest
    })

async def handle_config_get(request):
    return web.json_response({"intervalMs": 5000, "mode": "local", "isGoogleSheetActive": False})

async def handle_config_post(request):
    return web.json_response({"status": "success", "intervalMs": 5000, "mode": "local"})

async def websocket_handler(request):
    ws = web.WebSocketResponse()
    await ws.prepare(request)
    
    clients.add(ws)
    log.info(f"WebSocket client connected. Total: {len(clients)}")
    
    await ws.send_str(json.dumps({
        "type": "INIT_STATE",
        "intervalMs": 5000,
        "mode": "local",
        "isGoogleSheetActive": False
    }))
    
    try:
        async for msg in ws:
            if msg.type == WSMsgType.TEXT:
                if msg.data == 'close':
                    await ws.close()
            elif msg.type == WSMsgType.ERROR:
                log.error(f'ws connection closed with exception {ws.exception()}')
    finally:
        clients.remove(ws)
        log.info("WebSocket client disconnected.")
        
    return ws

async def root_handler(request):
    if request.headers.get("Upgrade", "").lower() == "websocket":
        return await websocket_handler(request)
    return web.FileResponse(os.path.join(BASE_DIR, "index.html"))

async def static_handler(request):
    filename = request.match_info['filename']
    filepath = os.path.join(BASE_DIR, filename)
    if os.path.exists(filepath) and os.path.isfile(filepath):
        return web.FileResponse(filepath)
    return web.Response(status=404)

app = web.Application()
app.router.add_post('/api/sensor/data', handle_sensor_data)
app.router.add_get('/api/sensor/hourly/{memberId}', handle_hourly)
app.router.add_get('/api/config/interval', handle_config_get)
app.router.add_post('/api/config/interval', handle_config_post)
app.router.add_get('/', root_handler)
app.router.add_get('/{filename}', static_handler)

if __name__ == '__main__':
    print("="*60)
    print(f" 파이썬 서버 가동 완료! (포트: {PORT})")
    print(f" 크롬 브라우저에서 http://localhost:{PORT} 접속 가능")
    print("="*60)
    web.run_app(app, port=PORT, access_log=None)

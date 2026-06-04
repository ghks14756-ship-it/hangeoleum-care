const http = require('http');

const payload = JSON.stringify({
  memberId: '#9999',
  stepCount: 1,
  leftPressure: 50,
  rightPressure: 50,
  balanceScore: 100,
  batteryLevel: 99
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/sensor/data',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('서버 응답 상태코드:', res.statusCode);
    console.log('서버 응답 내용:', data);
    if (res.statusCode === 200) {
      console.log('\n✅ API 정상 작동! 브라우저에서 #9999 상세 페이지에 차트가 갱신되었는지 확인하세요.');
    } else {
      console.log('\n❌ 오류가 발생했습니다.');
    }
  });
});

req.on('error', (e) => {
  console.error('❌ 서버 연결 실패:', e.message);
});

req.write(payload);
req.end();

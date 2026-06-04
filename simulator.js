const http = require('http');

// Configurable simulated members
const TARGET_MEMBER_IDS = [
  "#7721", "#7722", "#7723", "#7724", 
  "#7725", "#7726", "#7727", "#7728",
  "#7729", "#7730", "#7731", "#7732",
  "#7733", "#7734", "#7735", "#7736"
];

// Track step count state per member to simulate real continuous accumulation
const memberStepTracker = {};

class SmartMatTelemetrySimulator {
  constructor() {
    this.intervalId = null;
    this.isRunning = false;
    
    // Initialize step counts
    TARGET_MEMBER_IDS.forEach(id => {
      memberStepTracker[id] = Math.floor(Math.random() * 400) + 100;
    });
  }

  // Start the background telemetry streaming loop
  start(port = 3000, tickIntervalMs = 2500) {
    if (this.isRunning) return;
    
    this.isRunning = true;
    console.log(`[SmartMatSimulator] Virtual smart floor mats activated. Streaming sensors to port ${port} every ${tickIntervalMs}ms...`);
    
    this.intervalId = setInterval(() => {
      // Pick a random managed member node
      const randomMember = TARGET_MEMBER_IDS[Math.floor(Math.random() * TARGET_MEMBER_IDS.length)];
      
      // Increment steps dynamically
      const stepIncrement = Math.floor(Math.random() * 4) + 1; // Walk 1 to 4 steps
      memberStepTracker[randomMember] += stepIncrement;
      
      // Generate highly realistic Pressure Distribution & Balance Score:
      // In physical therapy: 50% / 50% left-right balance is perfectly symmetric.
      // - "Healthy" members (#7721, #7723, #7727, #7733) walk symmetrically (around 48-52).
      // - "Warning/Danger" members walk highly asymmetrically (due to pain, stroke palsy, e.g. #7722, #7725, #7728).
      
      const isImbalancedNode = ["#7722", "#7725", "#7728", "#7732", "#7735"].includes(randomMember);
      let leftPressure = 50;
      
      if (isImbalancedNode) {
        // High asymmetry: left foot takes less pressure due to palsy/injury
        leftPressure = Math.floor(Math.random() * 12) + 32; // 32% to 43%
      } else {
        // Normal symmetric walking balance
        leftPressure = Math.floor(Math.random() * 6) + 47;  // 47% to 52%
      }
      
      const rightPressure = 100 - leftPressure;
      
      // Balance Score = 100 - |left - right| * 2 (100 is perfectly symmetric)
      const asymmetryDev = Math.abs(leftPressure - rightPressure);
      const balanceScore = Math.max(0, 100 - (asymmetryDev * 2));
      
      const payload = JSON.stringify({
        memberId: randomMember,
        stepCount: memberStepTracker[randomMember],
        leftPressure: leftPressure,
        rightPressure: rightPressure,
        balanceScore: balanceScore
      });
      
      const options = {
        hostname: 'localhost',
        port: port,
        path: '/api/sensor/data',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload)
        }
      };
      
      const req = http.request(options, (res) => {
        res.resume(); // consume response
      });
      
      req.on('error', (err) => {
        if (err.code !== 'ECONNREFUSED') {
          console.warn(`[SmartMatSimulator] Remote server ingestion failed: ${err.message}`);
        }
      });
      
      req.write(payload);
      req.end();
      
    }, tickIntervalMs);
  }

  // Stop the simulation
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.isRunning = false;
      console.log('[SmartMatSimulator] Smart floor mat telemetry loops deactivated.');
    }
  }
}

module.exports = new SmartMatTelemetrySimulator();

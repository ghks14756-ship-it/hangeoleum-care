class IntervalManager {
  constructor() {
    // Default sync interval is 12 hours as per requirements (12 * 60 * 60 * 1000 = 43,200,000 ms)
    this.DEFAULT_INTERVAL = 12 * 60 * 60 * 1000;
    this.currentIntervalMs = this.DEFAULT_INTERVAL;
    
    // Active timeout handles for dynamic scheduling
    this.schedulerTimeout = null;
    this.onTickCallback = null;
    
    // Activity pattern adaptive state
    this.mode = 'STANDARD'; // 'STANDARD' | 'ACCELERATED' (high activity) | 'DORMANT' (dormant hours)
  }

  // Get current interval in milliseconds
  getInterval() {
    return this.currentIntervalMs;
  }

  // Dynamic interval overwriter called by external AI logic layer or configuration hooks
  setIntervalMs(ms) {
    if (typeof ms !== 'number' || ms <= 0) {
      console.error(`[IntervalManager] Invalid interval value: ${ms}`);
      return false;
    }
    
    this.currentIntervalMs = ms;
    console.log(`[IntervalManager] Sync interval updated to: ${ms} ms (${(ms / 1000).toFixed(1)}s)`);
    
    // Automatically adjust adaptation mode label for UI reference
    if (ms < 60000) {
      this.mode = 'AI_ACCELERATED_TESTING';
    } else if (ms < 12 * 60 * 60 * 1000) {
      this.mode = 'AI_HIGH_ACTIVITY_FOCUS';
    } else {
      this.mode = 'STANDARD';
    }
    
    // Dynamic Rescheduling: If there is an active timeout, reschedule it immediately!
    this.reschedule();
    return true;
  }

  // Set adaptation mode based on AI analysis
  setAdaptabilityMode(mode) {
    this.mode = mode;
    switch (mode) {
      case 'ACCELERATED': // High-activity acceleration (e.g., sync every 30 minutes)
        this.setIntervalMs(30 * 60 * 1000);
        break;
      case 'DORMANT': // Dormant hours deceleration (e.g., sync every 24 hours)
        this.setIntervalMs(24 * 60 * 60 * 1000);
        break;
      case 'STANDARD':
      default:
        this.setIntervalMs(this.DEFAULT_INTERVAL);
        break;
    }
  }

  // Start the scheduling microservice
  start(onTickCallback) {
    if (typeof onTickCallback !== 'function') {
      console.error('[IntervalManager] Start failed: tick callback must be a function');
      return;
    }
    this.onTickCallback = onTickCallback;
    console.log(`[IntervalManager] Scheduler started. Next aggregation in: ${(this.currentIntervalMs / 1000 / 60).toFixed(1)} mins`);
    this.scheduleNext();
  }

  // Internal dynamic recursive timeout scheduler
  scheduleNext() {
    if (this.schedulerTimeout) {
      clearTimeout(this.schedulerTimeout);
    }

    this.schedulerTimeout = setTimeout(async () => {
      console.log(`[IntervalManager] Epoch triggered! Commencing aggregation sync...`);
      if (this.onTickCallback) {
        try {
          await this.onTickCallback();
        } catch (err) {
          console.error('[IntervalManager] Error executing aggregation tick:', err);
        }
      }
      // Recursively schedule next based on potentially updated interval
      this.scheduleNext();
    }, this.currentIntervalMs);
  }

  // Reschedule next tick immediately (useful when interval is overridden dynamically)
  reschedule() {
    if (this.onTickCallback) {
      console.log(`[IntervalManager] Rescheduling active timer to apply new sync interval immediately...`);
      this.scheduleNext();
    }
  }

  // Kill the scheduler (clean shutdown)
  stop() {
    if (this.schedulerTimeout) {
      clearTimeout(this.schedulerTimeout);
      this.schedulerTimeout = null;
      console.log('[IntervalManager] Dynamic scheduler halted.');
    }
  }
}

module.exports = new IntervalManager();

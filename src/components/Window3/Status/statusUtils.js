export const SYSTEM_STATES = {
  SAFE: "SAFE",
  WARNING: "WARNING",
  CRITICAL: "CRITICAL",
};

export function deriveSystemStatus(data) {
  if (!data) {
    return {
      state: SYSTEM_STATES.WARNING,
      reason: "No system data available",
    };
  }

  const {
    criticalZones = 0,
    warningAlerts = 0,
  } = data;

  if (criticalZones > 0) {
    return {
      state: SYSTEM_STATES.CRITICAL,
      reason: `${criticalZones} zone(s) exceeding critical threshold`,
    };
  }

  if (warningAlerts > 0) {
    return {
      state: SYSTEM_STATES.WARNING,
      reason: `${warningAlerts} active warning alert(s)`,
    };
  }

  return {
    state: SYSTEM_STATES.SAFE,
    reason: "All systems operating within normal limits",
  };
}

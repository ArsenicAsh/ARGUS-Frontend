import { useEffect, useState } from "react";
import { deriveSystemStatus } from "../Status/statusUtils";

function formatLastUpdated(timestamp) {
  const diffMs = Date.now() - new Date(timestamp).getTime();
  const diffSec = Math.floor(diffMs / 1000);

  if (diffSec < 60) return `${diffSec}s ago`;
  const diffMin = Math.floor(diffSec / 60);
  return `${diffMin}m ago`;
}

export default function useSystemStatus() {
  const [statusData, setStatusData] = useState(null);

  useEffect(() => {
    // 🔧 Dummy backend data (to be replaced later)
    const mockData = {
      activeCameras: 12,
      totalCameras: 14,
      criticalZones: 1,
      warningAlerts: 2,
      lastUpdated: new Date().toISOString(),
    };

    setStatusData(mockData);
  }, []);

  const derived = deriveSystemStatus(statusData);

  return {
    state: derived.state,
    reason: derived.reason,
    stats: {
      activeCameras: statusData?.activeCameras ?? 0,
      criticalZones: statusData?.criticalZones ?? 0,
      warningAlerts: statusData?.warningAlerts ?? 0,
    },
    lastUpdated: statusData
      ? formatLastUpdated(statusData.lastUpdated)
      : "—",
  };
}

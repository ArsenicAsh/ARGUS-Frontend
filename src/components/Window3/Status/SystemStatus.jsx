import useSystemStatus from "../hooks/useSystemStatus";
import SystemStatusBadge from "./SystemStatusBadge";

export default function SystemStatus() {
  const { state, reason, stats, lastUpdated } = useSystemStatus();

  return (
    <div className="bg-neutral-900 rounded-lg p-4 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-neutral-300">
          System Status
        </h2>
        <SystemStatusBadge state={state} />
      </div>

      {/* Reason */}
      <p className="text-sm text-neutral-400">
        {reason}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-xs text-neutral-300">
        <div>
          <div className="text-sm text-neutral-400 font-medium">Active Cameras</div>
          <div className="text-lg font-semibold text-neutral-100">{stats.activeCameras}</div>
        </div>

        <div>
          <div className="text-sm text-neutral-400 font-medium">Critical Zones</div>
          <div className="text-lg font-semibold text-neutral-100">{stats.criticalZones}</div>
        </div>

        <div>
          <div className="text-sm text-neutral-400 font-medium">Warning Alerts</div>
          <div className="text-lg font-semibold text-neutral-100">{stats.warningAlerts}</div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-neutral-400">
        Last updated {lastUpdated}
      </div>
    </div>
  );
}

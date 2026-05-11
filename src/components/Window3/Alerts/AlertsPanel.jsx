import { useAlert } from "../../../context/AlertContext";
import AlertItem from "./AlertItem";

export default function AlertsPanel() {
  const { activeAlerts } = useAlert();

  return (
    <div className="bg-neutral-900 rounded-lg p-4 space-y-3 max-h-64 overflow-y-auto">
      <h3 className="text-sm font-semibold text-neutral-300">
        Alerts & Escalations
      </h3>

      <div className="space-y-2">
        {activeAlerts.length === 0 ? (
          <p className="text-sm text-neutral-500">
            No active alerts
          </p>
        ) : (
          activeAlerts.map((alert) => (
            <AlertItem key={alert.id} {...alert} />
          ))
        )}
      </div>
    </div>
  );
}
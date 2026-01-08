import useAlerts from "../hooks/useAlerts";
import AlertItem from "./AlertItem";

export default function AlertsPanel() {
  const alerts = useAlerts();

  return (
    <div className="bg-neutral-900 rounded-lg p-4 space-y-3 max-h-64 overflow-y-auto">
      <h3 className="text-sm font-semibold text-neutral-300">
        Alerts & Escalations
      </h3>

      <div className="space-y-2">
        {alerts.map(alert => (
          <AlertItem key={alert.id} {...alert} />
        ))}
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { useAlert } from "../context/AlertContext";
import { useAuth } from "../context/AuthContext";

export default function GlobalAlertPopup() {
  const {
    visibleNotifications,
    acknowledgeAlert,
  } = useAlert();

  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="fixed top-4 right-4 space-y-3 z-[9999]">
      {visibleNotifications.map((alert) => (
        <div
          key={alert.id}
          className={`w-96 p-4 rounded shadow-lg border ${
            alert.severity === "critical"
              ? "bg-red-900 border-red-700"
              : alert.severity === "warning"
              ? "bg-yellow-900 border-yellow-700"
              : "bg-blue-900 border-blue-700"
          }`}
        >
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="font-semibold capitalize">
                {alert.severity} Alert
              </p>

              <span className="text-xs text-gray-300">
                {new Date(alert.timestamp).toLocaleTimeString()}
              </span>
            </div>

            <p className="text-sm">{alert.message}</p>

            <p className="text-xs text-gray-300">
              Source: {alert.source}
            </p>

            {alert.status === "acknowledged" && (
              <p className="text-xs text-green-300">
                Acknowledged by {alert.acknowledgedBy}
              </p>
            )}

            <div className="flex gap-2 pt-2">
              {alert.status === "active" && (
                <button
                  onClick={() =>
                    acknowledgeAlert(alert.id, user.username)
                  }
                  className="bg-gray-800 hover:bg-gray-700 px-3 py-1 text-xs rounded"
                >
                  Acknowledge
                </button>
              )}

              <button
                onClick={() => navigate("/operations")}
                className="bg-blue-700 hover:bg-blue-600 px-3 py-1 text-xs rounded"
              >
                Open Operations
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
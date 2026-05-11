import { useAlert } from "../../../context/AlertContext";
import { useAuth } from "../../../context/AuthContext";
import { useDeploymentsContext } from "../context/DeploymentsContext";

const SEVERITY_STYLES = {
  critical: "bg-red-900 text-red-300 border-red-700",
  warning: "bg-yellow-900 text-yellow-300 border-yellow-700",
  info: "bg-blue-900 text-blue-300 border-blue-700",
};

const STATUS_STYLES = {
  active: "text-red-400",
  acknowledged: "text-yellow-400",
  resolved: "text-green-400",
};

export default function AlertItem({
  id,
  severity,
  message,
  source,
  status,
  timestamp,
  acknowledgedBy,
}) {
  const {
    acknowledgeAlert,
    removeActiveAlert,
  } = useAlert();

  const { createDeploymentFromAlert } =
    useDeploymentsContext();

  const { user } = useAuth();

  function handleRespond() {
    // Auto-acknowledge first
    if (status === "active") {
      acknowledgeAlert(id, user.username);
    }

    // Create deployment
    createDeploymentFromAlert(
      {
        id,
        severity,
        source,
        message,
      },
      user.username
    );

    // Remove alert from escalation queue
    removeActiveAlert(id);
  }

  return (
    <div className="border border-neutral-800 bg-neutral-950 rounded-lg p-3 space-y-3">

      {/* Top Row */}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-semibold uppercase px-2 py-1 rounded border ${
            SEVERITY_STYLES[severity]
          }`}
        >
          {severity}
        </span>

        <span className="text-xs text-neutral-500">
          {new Date(timestamp).toLocaleTimeString()}
        </span>
      </div>

      {/* Message */}
      <p className="text-sm text-neutral-200 leading-relaxed">
        {message}
      </p>

      {/* Source */}
      <p className="text-xs text-neutral-500">
        Source: {source}
      </p>

      {/* Status */}
      <div className="flex items-center justify-between">
        <span className={`text-xs font-medium ${STATUS_STYLES[status]}`}>
          {status.toUpperCase()}
        </span>

        {acknowledgedBy && (
          <span className="text-xs text-neutral-500">
            Ack: {acknowledgedBy}
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-1">

        {status === "active" && (
          <button
            onClick={() =>
              acknowledgeAlert(id, user.username)
            }
            className="bg-yellow-700 hover:bg-yellow-600 text-xs px-3 py-1 rounded"
          >
            Acknowledge
          </button>
        )}

        {(user.role === "Authority" ||
          user.role === "Admin") && (
          <button
            onClick={handleRespond}
            className="bg-blue-700 hover:bg-blue-600 text-xs px-3 py-1 rounded"
          >
            Respond
          </button>
        )}
      </div>
    </div>
  );
}
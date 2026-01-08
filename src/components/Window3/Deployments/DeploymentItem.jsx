const STATUS_LABELS = {
  APPROVED: "Approved",
  COMMAND_SENT: "Command Sent",
  ACKNOWLEDGED: "Acknowledged",
  EN_ROUTE: "En Route",
  ON_SITE: "On Site",
};

const STATUS_COLORS = {
  APPROVED: "text-neutral-300",
  COMMAND_SENT: "text-yellow-400",
  ACKNOWLEDGED: "text-green-400",
  EN_ROUTE: "text-blue-400",
  ON_SITE: "text-green-500",
};

const ACTION_BUTTONS = {
  APPROVED: "Send Command",
  COMMAND_SENT: "Mark Acknowledged",
  ACKNOWLEDGED: "Mark En Route",
  EN_ROUTE: "Mark On Site",
  ON_SITE: "Mark Resolved",
};

export default function DeploymentItem({
  title,
  status,
  assigned,
  approvedBy,
  time,
  onAdvance,
}) {
  const actionLabel = ACTION_BUTTONS[status];

  return (
    <div className="bg-neutral-900 rounded-lg p-3 space-y-3">
      <div className="text-base font-semibold text-neutral-100">
        {title}
      </div>

      <div className="text-sm">
        Status:{" "}
        <span className={`font-medium ${STATUS_COLORS[status]}`}>
          {STATUS_LABELS[status]}
        </span>
      </div>

      <div className="text-sm text-neutral-300">
        Assigned: {assigned}
      </div>

      <div className="text-sm text-neutral-300">
        Approved by: {approvedBy}
      </div>

      <div className="text-xs text-neutral-400">
        Time: {time}
      </div>

      {/* Action Button (UI-only) */}
      {actionLabel && (
        <div className="pt-2">
          <button
            className="w-full px-3 py-2 text-sm font-medium rounded-md
                       bg-neutral-800 hover:bg-neutral-700
                       text-neutral-200 transition"
            onClick={onAdvance}
          >
            {actionLabel}
          </button>
        </div>
      )}
    </div>
  );
}

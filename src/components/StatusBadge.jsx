function StatusBadge({ status }) {
  const colors = {
    safe: "bg-green-600",
    medium: "bg-yellow-500",
    high: "bg-red-600",
  };

  const labels = {
    safe: "SAFE",
    medium: "MEDIUM",
    high: "HIGH",
  };

  return (
    <span
      className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold rounded-full 
      text-white ${colors[status]}`}
    >
      {labels[status]}
    </span>
  );
}

export default StatusBadge;

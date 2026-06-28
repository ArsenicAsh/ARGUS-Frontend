export default function IncidentDetailsPanel({ camera }) {
  if (!camera) return null;

  const STATUS = {
    SAFE: {
      color: "text-green-400",
      badge: "bg-green-600/20 text-green-400",
      risk: "Low",
      trend: "Stable",
    },
    WARNING: {
      color: "text-yellow-400",
      badge: "bg-yellow-500/20 text-yellow-300",
      risk: "Moderate",
      trend: "Increasing",
    },
    CRITICAL: {
      color: "text-red-400",
      badge: "bg-red-600/20 text-red-300",
      risk: "High",
      trend: "Rapid Increase",
    },
  };

  const current = STATUS[camera.status];

  const crowd =
    camera.status === "CRITICAL"
      ? 6245
      : camera.status === "WARNING"
      ? 4820
      : 3180;

  const prediction =
    camera.status === "CRITICAL"
      ? "Likely to exceed safe capacity"
      : camera.status === "WARNING"
      ? "Crowd expected to rise"
      : "Crowd stable";

  const updated = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="h-full bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl p-3 text-neutral-200 flex flex-col overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm">
          Incident Intelligence
        </h3>

        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${current.badge}`}
        >
          {camera.status}
        </span>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-y-3 text-sm flex-1 content-start">

        <Label title="Camera" value={camera.id} />

        <Label title="Location" value={camera.name} />

        <Label
          title="Current Crowd"
          value={crowd.toLocaleString()}
        />

        <Label
          title="Trend"
          value={current.trend}
        />

        <Label
          title="Prediction"
          value={prediction}
          full
        />

        <Label
          title="Risk Level"
          value={current.risk}
          valueClass={current.color}
        />

      </div>

      {/* Divider */}
      <div className="border-t border-neutral-700 my-3" />

      {/* Nearby Resources */}
      <div>

        <div className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
          Nearby Resources
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">

          <Resource
            icon="🚑"
            title="Amb."
            value="2"
          />

          <Resource
            icon="🚓"
            title="Police"
            value="3"
          />

          <Resource
            icon="🏥"
            title="Medical"
            value="1"
          />

        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-neutral-700 mt-auto pt-3 flex justify-between text-xs text-neutral-500">

        <span>Last Updated</span>

        <span>{updated}</span>

      </div>
    </div>
  );
}

function Label({
  title,
  value,
  full = false,
  valueClass = "",
}) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <div className="text-xs text-neutral-500">
        {title}
      </div>

      <div className={`font-medium ${valueClass}`}>
        {value}
      </div>
    </div>
  );
}

function Resource({
  icon,
  title,
  value,
}) {
  return (
    <div className="bg-neutral-800 rounded-lg py-1.5">

      <div className="text-base">
        {icon}
      </div>

      <div className="text-xs text-neutral-400">
        {title}
      </div>

      <div className="font-semibold">
        {value}
      </div>

    </div>
  );
}
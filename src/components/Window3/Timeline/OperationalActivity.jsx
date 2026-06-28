const activities = [
  {
    id: 1,
    time: "18:36",
    title: "Normal Crowd Flow",
    description: "All monitored zones operating within safe density.",
    type: "safe",
  },
  {
    id: 2,
    time: "18:39",
    title: "Warning Threshold Reached",
    description: "Gate 3 density increasing steadily.",
    type: "warning",
  },
  {
    id: 3,
    time: "18:40",
    title: "AI Recommendation Generated",
    description: "Suggested deployment of Police Unit near Gate 3.",
    type: "ai",
  },
  {
    id: 4,
    time: "18:41",
    title: "Deployment Approved",
    description: "Operator approved Police Unit deployment.",
    type: "deployment",
  },
  {
    id: 5,
    time: "18:45",
    title: "Crowd Stabilized",
    description: "Density returned to acceptable levels.",
    type: "resolved",
  },
];

const styles = {
  safe: {
    dot: "bg-green-500",
    badge: "bg-green-500/20 text-green-300",
    label: "SAFE",
  },

  warning: {
    dot: "bg-yellow-500",
    badge: "bg-yellow-500/20 text-yellow-300",
    label: "WARNING",
  },

  ai: {
    dot: "bg-cyan-500",
    badge: "bg-cyan-500/20 text-cyan-300",
    label: "AI",
  },

  deployment: {
    dot: "bg-blue-500",
    badge: "bg-blue-500/20 text-blue-300",
    label: "ACTION",
  },

  resolved: {
    dot: "bg-emerald-500",
    badge: "bg-emerald-500/20 text-emerald-300",
    label: "RESOLVED",
  },
};

export default function OperationalActivity() {
  return (
    <div className="bg-neutral-900 rounded-lg p-4 h-full flex flex-col">
      <h3 className="text-sm font-semibold text-neutral-300 mb-4">
        Operational Activity
      </h3>

      <div className="flex-1 space-y-4">
        {activities.map((item) => {
          const style = styles[item.type];

          return (
            <div
              key={item.id}
              className="flex items-start gap-3 animate-fadeIn"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full ${style.dot}`}
                />

                {item.id !== activities.length && (
                  <div className="w-px flex-1 bg-neutral-700 mt-1" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-neutral-100">
                    {item.title}
                  </span>

                  <span className="text-xs text-neutral-500">
                    {item.time}
                  </span>
                </div>

                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  {item.description}
                </p>

                <span
                  className={`inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full font-medium ${style.badge}`}
                >
                  {style.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
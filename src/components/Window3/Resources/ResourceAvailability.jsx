const resources = [
  {
    icon: "🚑",
    name: "Ambulances",
    available: 8,
    deployed: 3,
    color: "bg-red-500",
  },
  {
    icon: "🚓",
    name: "Police Units",
    available: 18,
    deployed: 7,
    color: "bg-blue-500",
  },
  {
    icon: "🏥",
    name: "Medical Teams",
    available: 5,
    deployed: 2,
    color: "bg-green-500",
  },
  {
    icon: "🦺",
    name: "Volunteers",
    available: 42,
    deployed: 19,
    color: "bg-yellow-400",
  },
];

export default function ResourceAvailability() {
  return (
    <div className="bg-neutral-900 rounded-lg p-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-neutral-300">
          Resource Availability
        </h3>

        <div className="text-[10px] text-neutral-500">
          Avail / Deployed
        </div>
      </div>

      {/* Resource List */}
      <div className="space-y-2">
        {resources.map((resource) => (
          <div
            key={resource.name}
            className="flex items-center justify-between"
          >
            {/* Left */}
            <div className="flex items-center gap-2 min-w-0">

              <span
                className={`w-2.5 h-2.5 rounded-full ${resource.color}`}
              />

              <span className="text-base">
                {resource.icon}
              </span>

              <span className="text-sm text-neutral-200 truncate">
                {resource.name}
              </span>

            </div>

            {/* Right */}
            <div className="flex items-center gap-2 text-sm font-medium">

              <span className="text-green-400 w-6 text-right">
                {resource.available}
              </span>

              <span className="text-neutral-500">
                /
              </span>

              <span className="text-orange-400 w-6 text-right">
                {resource.deployed}
              </span>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
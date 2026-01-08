import { useState } from "react";

export default function DeploymentLog({ items }) {
  const [open, setOpen] = useState(false);

  if (!items.length) return null;

  return (
    <div className="bg-neutral-900 rounded-lg p-4 space-y-3">
      {/* Header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex justify-between items-center
                   text-sm font-semibold text-neutral-300"
      >
        <span>
          Deployment Log ({items.length})
        </span>
        <span className="text-neutral-400">
          {open ? "▼" : "▶"}
        </span>
      </button>

      {/* Content */}
      {open && (
        <div className="space-y-2">
          {items.map(dep => (
            <div
              key={dep.id}
              className="rounded-md bg-neutral-800 p-2"
            >
              <div className="text-sm font-medium text-neutral-200">
                {dep.title}
              </div>

              <div className="text-xs text-neutral-400">
                Assigned: {dep.assigned}
              </div>

              <div className="text-xs text-green-400 font-medium">
                Resolved
              </div>

              <div className="text-xs text-neutral-500">
                Time: {dep.time}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

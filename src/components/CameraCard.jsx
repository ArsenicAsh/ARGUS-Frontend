// src/components/CameraCard.jsx
import StatusBadge from "./StatusBadge";
import LivePulse from "./LivePulse";

export default function CameraCard({ id, status, selected, onClick, onDoubleClick }) {
  const glowColor = {
    safe: "shadow-[0_0_15px_3px_rgba(34,197,94,0.35)]",
    medium: "shadow-[0_0_15px_3px_rgba(234,179,8,0.35)]",
    high: "shadow-[0_0_15px_3px_rgba(239,68,68,0.45)]",
  };

  return (
    <div
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={`
        relative aspect-video bg-gray-800 rounded-xl
        flex items-center justify-center text-gray-300
        transition-all duration-300 cursor-pointer select-none

        hover:scale-[1.02]
        hover:shadow-xl hover:shadow-black/40
        hover:bg-gray-700

        ${glowColor[status]}

        ${selected ? "opacity-100" : "opacity-60"}
        hover:opacity-100

        ${selected ? "ring-4 ring-blue-400 scale-[1.03] shadow-blue-400/40" : ""}
      `}
    >
      {/* STATUS BADGE */}
      <StatusBadge status={status} />

      {/* LIVE PULSE */}
      <LivePulse status={status} />

      <span className="text-gray-400">Camera {id}</span>
    </div>
  );
}

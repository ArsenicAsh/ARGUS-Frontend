// src/components/FullscreenModal.jsx
export default function FullscreenModal({ open, id, status, onClose }) {
  if (!open) return null;

  const statusColors = {
    safe: "text-green-400",
    medium: "text-yellow-400",
    high: "text-red-400",
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-gray-900 p-6 rounded-xl w-[90%] h-[90%] shadow-2xl animate-fadeIn">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 transition px-4 py-1 rounded-lg"
        >
          Close ✕
        </button>

        {/* INFO HEADER */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Camera {id} — Fullscreen View</h1>
          <p className={`text-sm ${statusColors[status]}`}>
            Status: {status.toUpperCase()}
          </p>
        </div>

        {/* VIDEO / FEED AREA */}
        <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center text-gray-400">
          Live feed placeholder (replace with video stream)
        </div>

      </div>
    </div>
  );
}

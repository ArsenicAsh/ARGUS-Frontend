export default function CameraDetails({ id, status }) {

  const locationMap = {
    1: "North Gate Entry",
    2: "Main Corridor",
    3: "Ghat Area",
    4: "South Exit Lane",
  };

  const statusLabel = {
    safe: "Low Density",
    medium: "Moderate Density",
    high: "High Density",
  };

  const statusColor = {
    safe: "text-green-400",
    medium: "text-yellow-400",
    high: "text-red-400",
  };

  return (
    <div>
      {/* Camera Title */}
      <h2 className="text-2xl font-bold mb-1">Camera {id}</h2>
      <p className="text-gray-400 text-sm mb-4">
        Location: {locationMap[id]}
      </p>

      {/* Status */}
      <div className="mb-4">
        <p className="text-gray-300">
          <strong>Status:</strong>{" "}
          <span className={statusColor[status]}>
            {statusLabel[status]}
          </span>
        </p>
      </div>

      {/* Crowd Count Placeholder */}
      <div className="mb-4">
        <p className="text-gray-300">
          <strong>Crowd Count:</strong> <span>-- (API pending)</span>
        </p>
      </div>

      {/* Timestamp */}
      <div className="text-gray-400 text-sm mb-4">
        Last updated: {new Date().toLocaleTimeString()}
      </div>

      {/* Technical Info */}
      <div className="text-gray-300 text-sm">
        <p><strong>Resolution:</strong> 720p</p>
        <p><strong>FPS:</strong> 24</p>
        <p><strong>Stream:</strong> Live</p>
      </div>
    </div>
  );
}

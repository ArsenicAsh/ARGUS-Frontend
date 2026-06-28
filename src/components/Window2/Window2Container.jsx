import { useState } from "react";
import MapView from "./Map/MapView";
import CrowdGraph from "./Graph/CrowdGraph";
import IncidentDetailsPanel from "./Panels/IncidentDetailsPanel";

export default function Window2Container() {
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [showGraph, setShowGraph] = useState(true);

  // Toggle selected camera
  const handleCameraSelect = (camera) => {
    setSelectedCamera((prev) =>
      prev?.id === camera.id ? null : camera
    );
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* MAP */}
      <MapView onCameraSelect={handleCameraSelect} />

      {/* RIGHT SIDE PANELS */}
      {showGraph && (
        <div className="absolute top-4 right-4 z-[1000] w-[260px] space-y-3">
          {/* Crowd Graph */}
          <div className="h-36">
            <CrowdGraph
              camera={selectedCamera}
              onReset={() => setSelectedCamera(null)}
              onClose={() => setShowGraph(false)}
            />
          </div>

          {/* Incident Intelligence */}
          {selectedCamera && (
            <IncidentDetailsPanel camera={selectedCamera} />
          )}
        </div>
      )}

      {/* SHOW GRAPH BUTTON */}
      {!showGraph && (
        <button
          className="absolute top-4 right-4 bg-neutral-900 text-white px-3 py-1 rounded-md z-[1000]"
          onClick={() => setShowGraph(true)}
        >
          Show Graph →
        </button>
      )}
    </div>
  );
}
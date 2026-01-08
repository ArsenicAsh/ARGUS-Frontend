import { useState } from "react";
import MapView from "./Map/MapView";
import CrowdGraph from "./Graph/CrowdGraph";

export default function Window2Container() {
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [showGraph, setShowGraph] = useState(true);

  return (
    <div className="relative h-screen w-screen">
      {/* MAP */}
      <MapView onCameraSelect={setSelectedCamera} />

      {/* FLOATING GRAPH */}
      {showGraph && (
        <div className="absolute top-4 right-4 z-[1000] w-[360px] h-[220px]">
          <CrowdGraph
            camera={selectedCamera}
            onReset={() => setSelectedCamera(null)}
            onClose={() => setShowGraph(false)}
          />
        </div>
      )}

      {/* SHOW BUTTON */}
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

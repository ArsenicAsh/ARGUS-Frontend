import { useState } from "react";
import CameraCard from "../components/CameraCard";
import FullscreenModal from "../components/FullscreenModal";
import CameraDetails from "../components/CameraDetails";

function Window1() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [fullscreenCam, setFullscreenCam] = useState(null);

  const cameraData = [
    { id: 1, status: "safe" },
    { id: 2, status: "medium" },
    { id: 3, status: "high" },
    { id: 4, status: "safe" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex">

      {/* -------- CAMERA GRID AREA -------- */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "w-[75%]" : "w-full"
        }`}
      >
        {/* HEADER */}
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">ARGUS Monitoring Dashboard</h1>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600 transition"
          >
            {sidebarOpen ? "Close Details →" : "Open Details ←"}
          </button>
        </header>

        {/* CAMERA GRID */}
        <div className="grid grid-cols-2 gap-4">
          {cameraData.map((cam) => (
            <CameraCard
              key={cam.id}
              id={cam.id}
              status={cam.status}
              selected={selectedCamera === cam.id}
              onClick={() => {
                setSelectedCamera(cam.id);
                setSidebarOpen(true);
              }}
              onDoubleClick={() => setFullscreenCam(cam)}
            />
          ))}
        </div>
      </div>

      {/* -------- SIDEBAR -------- */}
      <aside
        className={`bg-gray-800 rounded-xl h-full transition-all duration-300 overflow-hidden 
        ${sidebarOpen ? "w-[25%] p-4 ml-4" : "w-0 p-0 ml-0"}`}
      >
        {sidebarOpen && (
          <>
            {selectedCamera ? (
              <CameraDetails
                id={selectedCamera}
                status={
                  cameraData.find((c) => c.id === selectedCamera)?.status
                }
              />
            ) : (
              <p className="text-gray-400">Click on a camera to view details.</p>
            )}
          </>
        )}
      </aside>

      {/* -------- FULLSCREEN MODAL -------- */}
      <FullscreenModal
        open={!!fullscreenCam}
        id={fullscreenCam?.id}
        status={fullscreenCam?.status}
        onClose={() => setFullscreenCam(null)}
      />
    </div>
  );
}

export default Window1;

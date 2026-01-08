import { CircleMarker, Popup } from "react-leaflet";

/**
 * TEMP PLACEHOLDER CAMERA DATA
 */
const dummyCameras = [
  {
    id: "CAM-01",
    name: "Ramkund Ghat",
    lat: 19.9979,
    lng: 73.7896,
    status: "SAFE",
  },
  {
    id: "CAM-02",
    name: "Godavari Bridge",
    lat: 19.9992,
    lng: 73.7921,
    status: "WARNING",
  },
  {
    id: "CAM-03",
    name: "Panchavati Area",
    lat: 20.0011,
    lng: 73.7872,
    status: "CRITICAL",
  },
  {
    id: "CAM-04",
    name: "Tapovan Road",
    lat: 19.9958,
    lng: 73.7953,
    status: "SAFE",
  },
];

const STATUS_COLORS = {
  SAFE: "#16a34a",
  WARNING: "#facc15",
  CRITICAL: "#dc2626",
};

export default function CameraNodes({ onCameraSelect }) {
  return (
    <>
      {dummyCameras.map((cam) => {
        const isCritical = cam.status === "CRITICAL";
        const color = STATUS_COLORS[cam.status];

        return (
          <div key={cam.id}>
            {/* 🔴 OUTER PULSING RING (CRITICAL ONLY) */}
            {isCritical && (
              <CircleMarker
                center={[cam.lat, cam.lng]}
                radius={20}
                pathOptions={{
                  color,
                  fillColor: color,
                  fillOpacity: 0.2,
                  weight: 2,
                  className: "leaflet-pulse-ring",
                }}
              />
            )}

            {/* 🔴 INNER CAMERA DOT */}
            <CircleMarker
              center={[cam.lat, cam.lng]}
              radius={8}
              pathOptions={{
                color,
                fillColor: color,
                fillOpacity: 0.95,
                weight: 1,
              }}
              eventHandlers={{
                click: () => {
                  onCameraSelect?.(cam);
                },
              }}
            >
              <Popup>
                <div className="text-sm">
                  <div className="font-semibold">{cam.name}</div>
                  <div>ID: {cam.id}</div>
                  <div>Status: {cam.status}</div>
                </div>
              </Popup>
            </CircleMarker>
          </div>
        );
      })}
    </>
  );
}

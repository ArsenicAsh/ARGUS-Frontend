import { Polyline, Tooltip } from "react-leaflet";
import { cameras, resources } from "./mapData";
import { findNearest, kmDistance, estimateETA } from "./mapUtils";

// THIS FUNCTION TELLS US WHICH RESOURCE IS LINKED
export function getLinkedResource() {
  const criticalCam = cameras.find((c) => c.status === "CRITICAL");
  if (!criticalCam) return null;

  return findNearest(criticalCam, resources);
}

// THIS DRAWS THE DASHED LINE + ETA LABEL
export default function ResourceLinkLayer() {
  const criticalCam = cameras.find((c) => c.status === "CRITICAL");
  if (!criticalCam) return null;

  const nearest = getLinkedResource();
  if (!nearest) return null;

  // distance + eta
  const distance = kmDistance(criticalCam, nearest);
  const eta = estimateETA(distance, nearest.type);

  // midpoint for label
  const midPoint = [
    (criticalCam.lat + nearest.lat) / 2,
    (criticalCam.lng + nearest.lng) / 2,
  ];

  return (
    <Polyline
      positions={[
        [criticalCam.lat, criticalCam.lng],
        [nearest.lat, nearest.lng],
      ]}
      pathOptions={{
        color: "#ef4444",
        weight: 2,
        dashArray: "6 6",
        opacity: 0.7,
      }}
    >
      <Tooltip
        sticky
        direction="top"
        className="text-xs font-medium bg-white/90 px-2 py-1 rounded shadow"
      >
        {distance.toFixed(1)} km · {eta} min
      </Tooltip>
    </Polyline>
  );
}

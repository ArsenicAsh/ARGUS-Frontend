import { Polygon, Popup, CircleMarker } from "react-leaflet";
import { getLinkedResource } from "./ResourceLinkLayer";

/**
 * PLACEHOLDER EMERGENCY RESOURCES
 */
const dummyResources = [
  { id: "AMB-01", type: "AMBULANCE", lat: 19.9996, lng: 73.7848, state: "EN_ROUTE" },
  { id: "POL-01", type: "POLICE", lat: 19.9989, lng: 73.7864, state: "AVAILABLE" },
  { id: "MED-01", type: "MEDICAL", lat: 19.9979, lng: 73.7896, state: "BUSY" },
  { id: "VOL-01", type: "VOLUNTEER", lat: 19.9992, lng: 73.7912, state: "AVAILABLE" },
];

const RESOURCE_STYLE = {
  AMBULANCE: { color: "#ef4444", label: "Ambulance" },
  POLICE: { color: "#2563eb", label: "Police Unit" },
  MEDICAL: { color: "#22c55e", label: "Medical Camp" },
  VOLUNTEER: { color: "#8b5cf6", label: "Volunteer Team" },
};

// small offset helper
const d = 0.00012;

// shape generators
function square(lat, lng) {
  return [
    [lat - d, lng - d],
    [lat - d, lng + d],
    [lat + d, lng + d],
    [lat + d, lng - d],
  ];
}

function diamond(lat, lng) {
  return [
    [lat - d, lng],
    [lat, lng + d],
    [lat + d, lng],
    [lat, lng - d],
  ];
}

function triangle(lat, lng) {
  return [
    [lat + d, lng],
    [lat - d, lng - d],
    [lat - d, lng + d],
  ];
}

function hexagon(lat, lng) {
  return [
    [lat + d, lng],
    [lat + d / 2, lng + d],
    [lat - d / 2, lng + d],
    [lat - d, lng],
    [lat - d / 2, lng - d],
    [lat + d / 2, lng - d],
  ];
}

function getShape(type, lat, lng) {
  switch (type) {
    case "AMBULANCE":
      return square(lat, lng);
    case "POLICE":
      return diamond(lat, lng);
    case "MEDICAL":
      return triangle(lat, lng);
    case "VOLUNTEER":
      return hexagon(lat, lng);
    default:
      return square(lat, lng);
  }
}

function getStateStyle(state, baseColor) {
  switch (state) {
    case "EN_ROUTE":
      return {
        dashArray: "4 4",
        opacity: 1,
        fillOpacity: 0.9,
        color: baseColor,
      };
    case "BUSY":
      return {
        dashArray: "2 4",
        opacity: 0.6,
        fillOpacity: 0.35,
        color: "#6b7280", // darker gray
      };
    default: // AVAILABLE
      return {
        dashArray: null,
        opacity: 1,
        fillOpacity: 0.95,
        color: baseColor,
      };
  }
}

export default function ResourceMarkers() {
  const linked = getLinkedResource();

  return (
    <>
      {dummyResources.map((res) => {
        const style = RESOURCE_STYLE[res.type];
        const points = getShape(res.type, res.lat, res.lng);
        const isLinked = linked && linked.id === res.id;

        return (
          <div key={res.id}>
            {/* Soft glow ONLY for the linked resource */}
            {isLinked && (
              <CircleMarker
                center={[res.lat, res.lng]}
                radius={22}
                pathOptions={{
                  color: style.color,
                  fillColor: style.color,
                  fillOpacity: 0.25,
                  weight: 0,
                }}
              />
            )}

            {/* Actual resource marker */}
            <Polygon
              positions={points}
              pathOptions={{
                ...getStateStyle(res.state, style.color),
                fillColor: style.color,
                weight: 2,
              }}

            >
              <Popup>
                <div className="text-sm">
                  <div className="font-semibold">{style.label}</div>
                  <div>ID: {res.id}</div>
                </div>
              </Popup>
            </Polygon>
          </div>
        );
      })}
    </>
  );
}

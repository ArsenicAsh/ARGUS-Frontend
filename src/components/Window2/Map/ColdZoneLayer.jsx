import { CircleMarker } from "react-leaflet";

/**
 * PLACEHOLDER COLD ZONES
 * These represent areas with low or near-zero crowd density
 */
const dummyColdZones = [
  {
    id: "CZ-01",
    lat: 19.9988,
    lng: 73.7839,
    label: "Open Ground",
  },
  {
    id: "CZ-02",
    lat: 19.9942,
    lng: 73.8005,
    label: "Low Footfall Area",
  },
  {
    id: "CZ-03",
    lat: 20.0031,
    lng: 73.7974,
    label: "Available Route",
  },
];

export default function ColdZoneLayer() {
  return (
    <>
      {dummyColdZones.map((zone) => (
        <CircleMarker
          key={zone.id}
          center={[zone.lat, zone.lng]}
          radius={35}
          pathOptions={{
            color: "#38bdf8",      // soft blue
            fillColor: "#38bdf8",
            fillOpacity: 0.18,
            weight: 1,
          }}
        />
      ))}
    </>
  );
}

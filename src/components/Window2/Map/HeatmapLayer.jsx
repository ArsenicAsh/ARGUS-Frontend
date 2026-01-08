import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";

/**
 * TEMP PLACEHOLDER HEATMAP DATA
 * Format: [lat, lng, intensity]
 * intensity: 0 (low) → 1 (high)
 */
const dummyHeatData = [
  [19.9979, 73.7896, 0.8], // Ramkund
  [19.9992, 73.7921, 0.6], // Bridge
  [20.0011, 73.7872, 0.95], // Panchavati (critical)
  [19.9958, 73.7953, 0.4], // Tapovan
  [19.9985, 73.7910, 0.7],
];

export default function HeatmapLayer() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const heatLayer = L.heatLayer(dummyHeatData, {
      radius: 30,
      blur: 25,
      maxZoom: 17,
      gradient: {
        0.2: "#00ff99", // green
        0.5: "#ffee00", // yellow
        0.7: "#ff8800", // orange
        1.0: "#ff0000", // red
      },
    });

    heatLayer.addTo(map);

    // Cleanup on unmount
    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map]);

  return null;
}

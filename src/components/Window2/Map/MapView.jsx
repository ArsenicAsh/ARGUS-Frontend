import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./leafletIconFix";

import CameraNodes from "./CameraNodes";
import LegendBar from "../Panels/LegendBar";
import HeatmapLayer from "./HeatmapLayer";
import ColdZoneLayer from "./ColdZoneLayer";
import ResourceMarkers from "./ResourceMarkers";
import ResourceLinkLayer from "./ResourceLinkLayer";

const DEFAULT_CENTER = [19.9975, 73.7898];
const DEFAULT_ZOOM = 14;

export default function MapView({ onCameraSelect }) {
  return (
    <div className="relative h-screen w-screen">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        className="h-full w-full"
        zoomControl
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <HeatmapLayer />
        <ColdZoneLayer />
        <ResourceLinkLayer />
        <ResourceMarkers />

        {/* ✅ PASS THE PROP */}
        <CameraNodes onCameraSelect={onCameraSelect} />
      </MapContainer>

      <LegendBar />
    </div>
  );
}

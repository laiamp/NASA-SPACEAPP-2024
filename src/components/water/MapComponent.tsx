// src/MapComponent.tsx
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { HeatmapLayer } from "react-leaflet-heatmap-layer"; // Ensure you have this installed
import "leaflet/dist/leaflet.css";
import "leaflet-heatmap"; // You may need to install this as well for heatmap functionality
import { LatLngExpression } from "leaflet";

const MapComponent: React.FC = () => {
  const center: LatLngExpression = [40.7128, -74.006]; // Example: New York City

  // Sample heatmap data (latitude, longitude, intensity)
  const heatmapData: [number, number, number][] = [
    [40.7128, -74.006, 10],
    [40.7138, -74.006, 5],
    [40.7118, -74.006, 8],
    // Add more points as needed
  ];

  return (
    <MapContainer
      center={center}
      zoom={12}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <HeatmapLayer points={heatmapData} />
    </MapContainer>
  );
};

export default MapComponent;

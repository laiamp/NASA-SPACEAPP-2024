import React from "react";
import Heatmap from "./explore/Heatmap";
import MapWithLayers from "./explore/MapWithLayers";
import "./explore/map.css";

function Map() {
  const data = [
    {
      lon: [0.62, 0.6201, 0.6202], // Longitud de Lleida
      lat: [41.6176, 41.6177, 41.6178], // Latitud de Lleida
      z: [30, 60, 90], // Valores de humedad (en porcentaje)
    },
  ];

  return (
    <div className="map-container">
      <div className="heatmap">
        <Heatmap data={data} />
      </div>
      <div className="map-with-layers">
        <MapWithLayers />
      </div>
    </div>
  );
}

export default React.memo(Map);

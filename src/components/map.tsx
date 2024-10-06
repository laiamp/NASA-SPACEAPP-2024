import React from 'react';
import Heatmap from './explore/Heatmap';
import MapWithLayers from './explore/MapWithLayers';
import './explore/map.css'

function Map() {
  const data = [
    {
      lon: [0.6200, 0.6201, 0.6202], // Longitud de Lleida
      lat: [41.6176, 41.6177, 41.6178], // Latitud de Lleida
      z: [30, 60, 90] // Valores de humedad (en porcentaje)
    }
  ];

  return (
    <div className="map-container">
      <Heatmap data={data}/>
      <MapWithLayers/>
    </div>
  );
};

export default React.memo(Map);

// src/PlotlyChart.js

import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';

const PlotlyChart = () => {
  useEffect(() => {
    const data = [
      {
        type: "densitymap",
        lon: [0.6200, 0.6201, 0.6202], // Longitud de Lleida
        lat: [41.6176, 41.6177, 41.6178], // Latitud de Lleida
        z: [30, 60, 90], // Valores de humedad (en porcentaje)
        radius: 50, // Radio de los puntos
        colorscale: [
          [0, 'rgb(255, 0, 0)'],   // Rojo (baja humedad)
          [1, 'rgb(0, 0, 255)']    // Azul (alta humedad)
        ], // Escala de colores de rojo a azul
        colorbar: { y: 1, yanchor: 'top', len: 0.45 }, // Configuración de la barra de color
      },
      {
        type: 'densitymap',
        lon: [0.6200, 0.6199, 0.6203], // Longitud de Lleida
        lat: [41.6176, 41.6175, 41.6179], // Latitud de Lleida
        z: [20, 50, 80], // Valores de humedad (en porcentaje)
        radius: [50, 100, 10], // Radios de los puntos
        colorscale: [
          [0, 'rgb(255, 0, 0)'],   // Rojo (baja humedad)
          [1, 'rgb(0, 0, 255)']    // Azul (alta humedad)
        ], // Escala de colores de rojo a azul
        colorbar: { y: 0, yanchor: 'bottom', len: 0.45 }, // Configuración de la barra de color
      }
    ];
    

    const layout = {
      map: { 
        style: 'light', 
        center: { lat: 41.6176, lon: 0.6200 }, // Centro en Cataluña (Lleida)
        zoom: 7 // Nivel de zoom (ajustable según preferencia)
      },
      width: 600,
      height: 400,
    };

    Plotly.newPlot('myDiv', data, layout);

    // Limpiar la gráfica al desmontar el componente
    return () => {
      Plotly.purge('myDiv');
    };
  }, []);

  return <div id="myDiv" style={{ width: '100%', height: '100%' }}></div>;
};

export default PlotlyChart;

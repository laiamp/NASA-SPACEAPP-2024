import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';


const colorscale = [
  [0, 'rgb(255, 0, 0)'],   // Rojo (baja humedad)
  [1, 'rgb(173, 216, 230)'] // Azul claro (alta humedad)
];

const radius = 50;
const type = "densitymap";


function Heatmap({ data }) {
  const plotRef = useRef(null);


  useEffect(() => {
    const layout = {
      map: { 
        style: 'light', 
        center: { lat: 41.6176, lon: 0.6200 },
        zoom: 15,
        width: 100,
        height: 100
      },

    };

    // Crear una copia de los datos y aplicar las propiedades constantes
    const plotData = data.map((item) => ({
      ...item,
      type: type,          // Aplica el tipo de gráfico
      colorscale: colorscale, // Aplica la colorscale
      radius: radius        // Aplica el radio
    }));

    // Verifica si plotRef.current está definido
    if (plotRef.current) {
      Plotly.newPlot(plotRef.current, plotData, layout);
    }

    // Limpiar la gráfica al desmontar el componente
    return () => {
      if (plotRef.current) {
        Plotly.purge(plotRef.current);
      }
    };
  }, [data, colorscale, radius, type]); // Dependencias de useEffect

  return <div ref={plotRef}></div>;
}

export default Heatmap;
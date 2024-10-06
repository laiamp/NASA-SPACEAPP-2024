import React, { useEffect, useRef, useState } from 'react';
import Plotly from 'plotly.js-dist';

// Definición de colores del heatmap
const colorscale = [
  [0, 'rgb(255, 0, 0)'],   // Rojo
  [1, 'rgb(0, 191, 165)']       // Turquesa más oscuro
];

const radius = 50;
const type = "densitymap";

// Array de fechas de ejemplo
const dates = [
  "2024-10-01", "2024-10-02", "2024-10-03", "2024-10-04", "2024-10-05", 
  "2024-10-06", "2024-10-07", "2024-10-08", "2024-10-09", "2024-10-10"
];

const defaultLayout = {
  map: { 
    style: 'light', 
    center: { lat: 41.6176, lon: 0.6200 },  // Coordenadas de Lleida
    zoom: 10,  // Zoom adecuado para una ciudad
  },
  width: 300,
  height: 300,
  margin: { t: 0, l: 0, r: 0, b: 0 },
};

function Heatmap() {
  const plotRef = useRef(null);
  const [data, setData] = useState([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0); 

  useEffect(() => {
    const fetchDataForDate = (date) => {
      const baseLat = 41.6176;
      const baseLon = 0.6200;
      const newData = Array.from({ length: 10 }, () => ({
        lat: baseLat + Math.random() * 0.01 - 0.005,
        lon: baseLon + Math.random() * 0.01 - 0.005,
        z: Math.random()
      }));

      setData(newData);
    };

    const selectedDate = dates[selectedDateIndex]; // Obtener la fecha seleccionada del array
    fetchDataForDate(selectedDate);  // Llama a la función cuando se selecciona una fecha

  }, [selectedDateIndex]);  // Se ejecuta cuando cambia la fecha seleccionada

  useEffect(() => {
    const plotData = [{
      type: type,          // Aplica el tipo de gráfico
      lat: data.map(item => item.lat),     // Latitud de cada punto
      lon: data.map(item => item.lon),     // Longitud de cada punto
      z: data.map(item => item.z),         // Valor de humedad (o cualquier dato que desees mapear)
      colorscale: colorscale, // Aplica la escala de colores
      radius: radius,        // Aplica el radio
      showscale: false       // Oculta la escala de colores
    }];

    if (plotRef.current) {
      Plotly.newPlot(plotRef.current, plotData, defaultLayout);
    }

    // Limpia el plot en el desmontaje
    return () => {
      if (plotRef.current) {
        Plotly.purge(plotRef.current);
      }
    };
  }, [data]); // Se ejecuta cada vez que los datos cambian

  const handleSliderChange = (e) => {
    setSelectedDateIndex(Number(e.target.value));  // Actualiza el índice de la fecha seleccionada
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        {/* Mostrar la fecha seleccionada */}
        <span>Selected Date: {dates[selectedDateIndex]}</span>
      </div>
      
      {/* Slider horizontal para seleccionar la fecha */}
      <input 
        type="range" 
        min="0" 
        max={dates.length - 1} 
        value={selectedDateIndex} 
        onChange={handleSliderChange}  // Maneja el cambio en el slider
        style={{ width: '100%', marginBottom: '10px' }}
      />
      
      {/* Mapa de calor con estilo en línea */}
      <div 
        ref={plotRef} 
        style={{
          width: '100%', 
          height: 'auto',
          borderRadius: '15px', // Aplica bordes redondeados
          overflow: 'hidden', // Asegura que el contenido respete el borde redondeado
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Sombra sutil
        }}
      ></div>
    </div>
  );
}

export default Heatmap;

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Cell } from 'recharts';

interface Crop {
  name: string;
  compatibility: number;
}

interface CropBarChartProps {
  crops: Crop[];
}

// Helper function to calculate color based on compatibility value (0 = red, 1 = green)
const getColor = (value: number): string => {
  const red = Math.round(255 * (1 - value));  // Red decreases as value increases
  const green = Math.round(255 * value);      // Green increases as value increases
  return `rgb(${red}, ${green}, 0)`;          // Blue stays at 0 for red-to-green transition
};

const Recommender: React.FC<CropBarChartProps> = ({ crops }) => {
  return (
    <div>
      <h4>Crop Compatibility with Field</h4>
      <BarChart
        width={300}  // Ajusta el ancho según sea necesario
        height={300}
        data={crops}
        margin={{ top: 20, right: 30, left: 20, bottom: 100 }} // Aumenta el margen inferior para evitar el solapamiento
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name" 
          interval={0} 
          angle={90}       // Rota las etiquetas 90 grados
          textAnchor="start" // Alinea las etiquetas en el inicio
        />
        <YAxis domain={[0, 1]} hide={true} />  {/* Oculta el eje Y si no es necesario */}
        <Tooltip />
        {/* Si no deseas la leyenda, descomenta la siguiente línea */}
        {/* <Legend /> */}
        <Bar dataKey="compatibility">
          {crops.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.compatibility)} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Recommender;

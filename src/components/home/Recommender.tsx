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

const CropBarChart: React.FC<CropBarChartProps> = ({ crops }) => {
  return (
    <div>
      <h2>Crop Compatibility with Field</h2>
      <BarChart
        width={600}
        height={300}
        data={crops}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 1]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="compatibility">
          {crops.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.compatibility)} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default CropBarChart;

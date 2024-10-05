import React from 'react';
import Plot  from 'react-plotly.js';

const ScatterPlot = () => {
  // Sample data
  const xValues = [1, 2, 3, 4, 5];
  const yValues = [10, 15, 13, 17, 20];

  return (
    <div>
      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            mode: 'lines+markers', // Line and markers
            type: 'scatter',
            marker: { color: 'blue' },
            line: { shape: 'linear', color: 'blue' },
            name: 'Data Points',
          },
        ]}
        config = {{responsive: true}}
        layout={{
          title: 'Scatter Plot with Line',
          xaxis: {
            title: 'X Axis',
          },
          yaxis: {
            title: 'Y Axis',
          },
        }}
      />
    </div>
  );
};

export default React.memo(ScatterPlot);;
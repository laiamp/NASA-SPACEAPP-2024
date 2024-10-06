import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';

const colorscale = [
  [0, 'rgb(255, 0, 0)'],   // Red (low humidity)
  [1, 'rgb(173, 216, 230)'] // Light blue (high humidity)
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
      },
      width: 300,  // Width you want for the map
      height: 300, // Adjust height based on width to preserve proportions
      margin: { t: 0, l: 0, r: 0, b: 0 }, // Reduce margins for better fit
    };

    // Create a copy of the data and apply constant properties
    const plotData = data.map((item) => ({
      ...item,
      type: type,          // Apply the chart type
      colorscale: colorscale, // Apply the colorscale
      radius: radius        // Apply the radius
    }));

    // Check if plotRef.current is defined
    if (plotRef.current) {
      Plotly.newPlot(plotRef.current, plotData, layout);
    }

    // Cleanup plot on component unmount
    return () => {
      if (plotRef.current) {
        Plotly.purge(plotRef.current);
      }
    };
  }, [data]);

  return <div ref={plotRef} style={{ width: '100%', height: 'auto' }}></div>;
}

export default Heatmap;

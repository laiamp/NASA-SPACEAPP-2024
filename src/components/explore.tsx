import React, {useState} from 'react';
import Heatmap from './explore/Heatmap';

function Explore() {
    const heatmapData = [
        [51.505, -0.09, 1],
        [51.51, -0.1, 0.7],
        [51.51, -0.12, 0.8],
        [51.49, -0.1, 0.6],
        // Add more data points as needed
    ];

    return (
        <div>
          <h1>Leaflet Heatmap Example</h1>
          <Heatmap data={heatmapData} />
        </div>
      );
};

// al mapa només mostrem xinxeta
// a sota desplegable amb info del punt

export default React.memo(Explore);
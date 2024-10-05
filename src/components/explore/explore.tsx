import React from 'react';
import MapWithLayers from './MapWithLayers';

const Explore = () => {
  return (
    <div className="App">
      <h1>Leaflet Map with Layers</h1>
      <MapWithLayers />
    </div>
  );
};

export default React.memo(Explore);
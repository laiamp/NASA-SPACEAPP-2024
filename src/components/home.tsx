import React from 'react';
import ScatterPlot from './home/plot';

const Home = () => {
  return (
    <div>
      <h2>Inicio</h2>
      <p>Bienvenido a la página de inicio.</p>
      <ScatterPlot/>
    </div>
  );
};

export default React.memo(Home);

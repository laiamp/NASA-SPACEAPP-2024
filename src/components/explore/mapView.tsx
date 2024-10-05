// MapEmbed.js
import React from 'react';

function MapEmbed({ point }) {
  let link = 'https://www.openstreetmap.org/export/embed.html?bbox=0.7227,41.569,0.72278,41.5696';
  if (point) {
    console.log('point', point)
    link += `&marker=${point.latitude},${point.longitude}`;
    console.log('link', link);
  }

  return (
    <div style={{ width: '100%', height: '50vh' }}>
      <iframe
        title="Mapa de OpenStreetMap"
        src={link}
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default MapEmbed;

import React, {useState} from 'react';
import MapEmbed from './explore/mapView';
import ToggleList from './explore/togglePoints';

function Explore() {
  const [point, setPoint] = useState();
  return (
    <div>
      <h2>Landmarks</h2>
      <MapEmbed point={point}/>
      <ToggleList setPoint={setPoint} />
    </div>
  );
};

// al mapa només mostrem xinxeta
// a sota desplegable amb info del punt

export default React.memo(Explore);
import React from "react";
import Recommender from "../recommender/Recommender";

const Water = () => {

  const itemsArray = [
    ['Item 1', 1],
    ['Item 2', 0.4],
    ['Item 3', 0.8],
    ['Item 4', 0],
    ['Item 5', 0.9],
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h2>Crop Compatibility</h2>
      <Recommender items={itemsArray}/>
    </div>
  );
};

export default React.memo(Water);

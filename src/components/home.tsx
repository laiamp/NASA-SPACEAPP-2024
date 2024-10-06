import React from "react";
import tomato from "./home/images/tomato.jpg";
import corn from "./home/images/corn.png";
import potato from "./home/images/potato.png";
import Recommender from "./home/Recommender";
import Rform from './form';

const itemsArray = [
    ['Item 1', 1],
    ['Item 2', 0.4],
    ['Item 3', 0.8],
    ['Item 4', 0],
    ['Item 5', 0.9],
];

function Home () {
  return (
    <div>
      <h2>Welcome back, Luis</h2>
      <p>Bienvenido a la página de inicio.</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <img
          src={tomato}
          alt="Watering_can"
          style={{ width: "60px", height: "60px" }}
        />
        <progress value="42" max="100" className="light-green-text"></progress>
        42%
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <img
          src={corn}
          alt="Watering_can"
          style={{ width: "60px", height: "60px" }}
        />
        <progress value="42" max="100" className="light-green-text"></progress>
        42%
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <img
          src={potato}
          alt="Watering_can"
          style={{ width: "60px", height: "60px" }}
        />
        <progress value="42" max="100" className="light-green-text"></progress>
        42%
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <h2>Crop Compatibility</h2>
    <Recommender items={itemsArray}/>
    </div>
     </div>
  );
};

export default React.memo(Home);

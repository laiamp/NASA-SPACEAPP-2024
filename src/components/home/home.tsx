import React from "react";
import tomato from "./images/tomato.jpg";
import corn from "./images/corn.png";
import potato from "./images/potato.png";

const Home = () => {
  return (
    <div>
      <h2>Welcome back, X</h2>
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
    </div>
  );
};

export default React.memo(Home);

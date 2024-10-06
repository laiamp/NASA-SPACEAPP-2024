import React from "react";
import heatmap from "../../../heatmap3.png";

const Water = () => {
  return (
    <div>
      <h2>haha</h2>
      <p>Estos son nuestros servicios.</p>
      <img
        src={heatmap}
        alt="Watering_can"
        style={{
          width: "300px",
        }}
      />
    </div>
  );
};

export default React.memo(Water);

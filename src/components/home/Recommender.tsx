import React from "react";
import './Recommender.css';

const Recommender = ({ items }) => { 
  const getColor = (value) => {
    // Calculate the color based on the value (0 to 1)
    const red = Math.floor(255 * (1 - value));
    const green = Math.floor(255 * value);
    return `rgb(${red}, ${green}, 0)`; // Color goes from red to green
  };

  return (
    <div className="recommender-container">
      {items.map(([label, value], index) => (
        <div key={index} className="recommendation-item">
          <span className="recommendation-label">{label}</span>
          <div
            className="recommendation-bar"
            style={{
              backgroundColor: getColor(value),
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(Recommender);

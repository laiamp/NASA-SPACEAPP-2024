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
      <div>
          {items.map(([label, value], index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                  <span style={{ flex: 1 }}>{label}</span>
                  <div
                      style={{
                          width: '50px',
                          height: '20px',
                          backgroundColor: getColor(value),
                          borderRadius: '5px',
                          marginLeft: '10px',
                      }}
                  />
              </div>
          ))}
      </div>
  );
};

export default React.memo(Recommender);
// CropsProgress.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getProgressColor = (progress) => {
  if (progress < 25) return '#ff4d4d'; // Rojo
  if (progress < 60) return '#ffcc00'; // Naranja
  return '#4CAF50'; // Verde
};

const CropsProgress = ({ cropsData }) => {
  return (
    <div>
      {/** Progress bars with icons */}
      {cropsData.map(({ icon, label, progress }) => (
        <div
          key={label}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            margin: '10px 0',
          }}
        >
          <FontAwesomeIcon
            icon={icon}
            size="2x"
            style={{ marginRight: '10px', color: '#333' }}
          />
          <div style={{ position: 'relative', width: '100%', height: '20px', background: '#e0e0e0', borderRadius: '5px' }}>
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                background: getProgressColor(progress),
                borderRadius: '5px'
              }}
            />
          </div>
          <span style={{ marginLeft: '10px', color: '#333' }}>{progress}%</span>
        </div>
      ))}
    </div>
  );
};

export default CropsProgress;

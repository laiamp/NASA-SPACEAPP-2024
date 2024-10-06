import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CropsProgress.css'; //  de importar el CSS

const getProgressColor = (progress) => {
  if (progress < 25) return '#ff9999'; // Rojo más intenso
  if (progress < 60) return '#ffdb4d'; // Naranja más intenso
  return '#99cc99'; // Verde más intenso
};


const CropsProgress = ({ cropsData }) => {
  return (
    <div className="crops-progress">
      {/** Progress bars with icons */}
      {cropsData.map(({ icon, label, progress }) => (
        <div
          key={label}
          className="crop-item"
        >
          <FontAwesomeIcon
            icon={icon}
            size="2x"
            className="crop-icon"
          />
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%`, background: getProgressColor(progress) }}
            />
          </div>
          <span className="progress-label">{progress}%</span>
        </div>
      ))}
    </div>
  );
};

export default CropsProgress;

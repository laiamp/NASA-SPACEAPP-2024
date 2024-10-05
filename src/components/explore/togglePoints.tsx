import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function ToggleList({ setPoint }) {
  // Lista de elementos
  const items = [
    { id: 1, title: 'Fungus', details: 'There are fungus on the potatoes', latitude: 41.569 , longitude: 0.7227},
    { id: 2, title: 'Sprout', details: 'A plant is starting to sprout', latitude: 41.567, longitude: 0.7227},
  ];

      const [activeItem, setActiveItem] = useState(null);

  const handleToggle = (item) => {
    setActiveItem(activeItem === item.id ? null : item.id);
    setPoint( activeItem === item.id ? null : { longitude: item.longitude, latitude: item.latitude })
  };

  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handleToggle(item)}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} />
              <h2 style={{ cursor: 'pointer', flexGrow: 1 }}>
                {item.title}
              </h2>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ cursor: 'pointer' }}
              />
            </div>
            {activeItem === item.id && <p style={{ marginLeft: '40px' }}>{item.details}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default ToggleList;

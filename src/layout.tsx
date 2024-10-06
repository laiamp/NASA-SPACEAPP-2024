import React from 'react';
import './TextBox.css'; // Importa los estilos CSS si es necesario

const TextBox = ({ title }) => {
  return (
    <div className="text-box">
        <h2 className="text-box-title">{title}</h2>
    </div>
  );
};

export default TextBox;

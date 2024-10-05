// src/components/Navbar.js
import React from 'react';
import './navbar.css';

const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      <li className={`navbar-item ${activeTab === 'water' ? 'active' : ''}`} onClick={() => onTabChange('water')}>
          Water
        </li>
        <li className={`navbar-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => onTabChange('home')}>
          Inicio
        </li>
        <li className={`navbar-item ${activeTab === 'explore' ? 'active' : ''}`} onClick={() => onTabChange('explore')}>
          Explore
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// src/components/Navbar.js
import React from "react";
import "./navbar.css";
import waterImage from "./images/watering_can.png"; // Adjust the path as needed -> path was wrong and it didn't show at all

const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li
          className={`navbar-item ${activeTab === "water" ? "active" : ""}`}
          onClick={() => onTabChange("water")}
        >
          <img
            src={waterImage}
            alt="Watering_can"
            style={{ width: "50px", height: "50px" }}
          />
        </li>
        <li
          className={`navbar-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => onTabChange("home")}
        >
          Inicio
        </li>
        <li
          className={`navbar-item ${activeTab === "explore" ? "active" : ""}`}
          onClick={() => onTabChange("explore")}
        >
          Explore
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

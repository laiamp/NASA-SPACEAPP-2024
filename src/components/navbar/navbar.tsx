import React from "react";
import "./navbar.css";
import mapImage from "./images/map.svg"; // Adjust the path as needed -> path was wrong and it didn't show at all
import homeImage from "./images/wheat.svg"; // Adjust the path as needed -> path was wrong and it didn't show at all
import bar from "./images/bar.svg"; // Adjust the path as needed -> path was wrong and it didn't show at all

const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li
          className={`navbar-item ${activeTab === "water" ? "active" : ""}`}
          onClick={() => onTabChange("water")}
        >
          <img
            src={mapImage}
            alt="Watering_can"
            style={{ width: "35px", height: "35px" }}
          />
        </li>
        <li
          className={`navbar-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => onTabChange("home")}
        >
          <img
            src={homeImage}
            alt="Watering_can"
            style={{ width: "35px", height: "35px" }}
          />
        </li>
        <li
          className={`navbar-item ${activeTab === "explore" ? "active" : ""}`}
          onClick={() => onTabChange("explore")}
        >
          <img
            src={bar}
            alt="Watering_can"
            style={{ width: "35px", height: "35px" }}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

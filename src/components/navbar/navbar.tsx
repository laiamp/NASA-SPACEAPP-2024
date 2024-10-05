import "./navbar.css";
import mapImage from "./images/map.svg";
import homeImage from "./images/home.svg";
import plotImage from "./images/bar.svg";
import mapSelectedImage from "./images/map-selected.svg";
import homeSelectedImage from "./images/home-selected.svg";
import plotSelectedImage from "./images/bar-selected.svg";

const Navbar = ({ activeTab, onTabChange }) => {
  const source_map = activeTab === "water" ? mapSelectedImage : mapImage;
  const source_home = activeTab === "home" ? homeSelectedImage : homeImage;
  const source_plot = activeTab === "explore" ? plotSelectedImage : plotImage;

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li
          className={`navbar-item ${activeTab === "water" ? "active" : ""}`}
          onClick={() => onTabChange("water")}
        >
          <img
            src={source_map}
            alt="Watering_can"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </li>
        <li
          className={`navbar-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => onTabChange("home")}
        >
          <img
            src={source_home}
            alt="Watering_can"
            style={{
              width: "35px",
              height: "35px",
            }}
          />
        </li>
        <li
          className={`navbar-item ${activeTab === "explore" ? "active" : ""}`}
          onClick={() => onTabChange("explore")}
        >
          <img
            src={source_plot}
            alt="Watering_can"
            style={{ width: "35px", height: "35px" }}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

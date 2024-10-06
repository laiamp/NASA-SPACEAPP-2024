import "./navbar/navbar.css";
import mapImage from "./navbar/images/map.svg";
import homeImage from "./navbar/images/home.svg";
import plotImage from "./navbar/images/bar.svg";
import mapSelectedImage from "./navbar/images/map-selected.svg";
import homeSelectedImage from "./navbar/images/home-selected.svg";
import plotSelectedImage from "./navbar/images/bar-selected.svg";

const Navbar = ({ activeTab, onTabChange }) => {
    const source_map = activeTab === "map" ? mapSelectedImage : mapImage;
    const source_home = activeTab === "home" ? homeSelectedImage : homeImage;
    const source_plot = activeTab === "plots" ? plotSelectedImage : plotImage;

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li
                    className={`navbar-item ${activeTab === "map" ? "active" : ""}`}
                    onClick={() => onTabChange("map")}
                >
                    <img
                        src={source_map}
                        alt="Map"
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
                    className={`navbar-item ${activeTab === "plots" ? "active" : ""}`}
                    onClick={() => onTabChange("plots")}
                >
                    <img
                        src={source_plot}
                        alt="Plots"
                        style={{ width: "35px", height: "35px" }}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

// src/App.js
import { useState } from "react";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Water from "./components/water/water";
import Explore from "./components/explore/explore";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "water":
        return <Water />;
      case "explore":
        return <Explore />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <div className="content">{renderActiveTab()}</div>
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;

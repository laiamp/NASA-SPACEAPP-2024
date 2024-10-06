
import { useState } from "react";
import Navbar from './components/navbar';
import Home from './components/home';
import Plots from './components/plots';
import Map from './components/map';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "map":
        return <Map />;
      case "plots":
        return <Plots />;
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

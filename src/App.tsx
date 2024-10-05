// src/App.js
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Water from './components/water';
import Explore from './components/explore';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'water':
        return <Water />;
      case 'explore':
        return <Explore />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <div className="content">
        {renderActiveTab()}
      </div>
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;

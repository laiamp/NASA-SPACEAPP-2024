import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Plots from "./components/plots";
import Map from "./components/map";
import SignUpPage from "./components/SignUp/SignUp"; // Import the SignInPage component
import Greeting from "./components/Greeting.tsx"; // Import the Greeting component
import "./App.css";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false); // Add authentication state
  const [isGreetingVisible, setIsGreetingVisible] = useState<boolean>(false); // New state for greeting

  const handleSignIn = (email: string, password: string) => {
    // Here you can add actual authentication logic
    console.log("Signed in with:", email, password);
    setIsSignedIn(true); // Update state when signed in
    setIsGreetingVisible(true); // Show greeting after sign-up
  };

  const handleContinue = () => {
    setIsGreetingVisible(false); // Hide greeting and show the navbar
  };

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
      {isSignedIn && isGreetingVisible ? (
        <Greeting onContinue={handleContinue} />
      ) : isSignedIn ? (
        <>
          <div className="content">{renderActiveTab()}</div>
          <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
        </>
      ) : (
        <SignUpPage onSignIn={handleSignIn} />
      )}
    </div>
  );
};

export default App;

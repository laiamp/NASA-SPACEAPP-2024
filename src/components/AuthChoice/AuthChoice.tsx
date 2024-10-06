import React, { useState } from "react";
import SignInPage from "../SignUp/SignUp";
import SignUpPage from "../SignUp/SignUp";

const AuthChoice: React.FC = () => {
  const [isSigningIn, setIsSigningIn] = useState<boolean>(true);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          src="https://via.placeholder.com/100"
          alt="Company Logo"
          style={styles.logo}
        />
        <h1 style={styles.companyName}>My Company</h1>
      </div>

      {isSigningIn ? <SignInPage /> : <SignUpPage />}

      <div style={styles.toggleContainer}>
        <button
          style={styles.toggleButton}
          onClick={() => setIsSigningIn(true)}
        >
          Sign In
        </button>
        <button
          style={styles.toggleButton}
          onClick={() => setIsSigningIn(false)}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },
  header: {
    marginBottom: "20px",
    textAlign: "center",
  },
  logo: {
    width: "100px",
    marginBottom: "10px",
  },
  companyName: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
  },
  toggleContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    maxWidth: "300px",
  },
  toggleButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default AuthChoice;

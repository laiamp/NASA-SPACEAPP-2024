import React from "react";

interface GreetingProps {
  onContinue: () => void;
}

const Greeting: React.FC<GreetingProps> = ({ onContinue }) => {
  return (
    <div style={styles.container}>
      <h1>Hello!</h1>
      <p>Welcome to our application. Click the button below to continue.</p>
      <button onClick={onContinue} style={styles.button}>
        Continue
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default Greeting;

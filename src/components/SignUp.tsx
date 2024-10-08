import React, { useState } from "react";
import logoSrc from "./logo.jpeg";
interface SignInPageProps {
  onSignIn: (email: string, password: string) => void;
}

const SignUpPage: React.FC<SignInPageProps> = ({ onSignIn }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    onSignIn(email, password); // Call the onSignIn prop
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        {/* Logo and Company Name */}
        <div style={styles.header}>
          <img src={logoSrc} alt="FieldFlow" style={styles.logo} />
          <h1 style={styles.companyName}>FieldFlow</h1>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputContainer}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          {error && <div style={styles.error}>{error}</div>}
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

// Styles (same as before)
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "white",
  },
  formContainer: {
    padding: "40px",
    backgroundColor: "white",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
  },
  header: {
    marginBottom: "20px",
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
  form: {
    width: "100%",
  },
  inputContainer: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "4px",
    fontSize: "16px",
    backgroundColor: "white",
    color: "black",
  },
  error: {
    color: "red",
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#54785e",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default SignUpPage;
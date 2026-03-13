import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "40px",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "80vh",
      }}
    >
      <h1>Welcome to Home Page</h1>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default Home;

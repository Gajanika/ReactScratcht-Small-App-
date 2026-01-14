import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Conditional Rendering Demo</h1>

      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <p style={{ color: "green" }}>Welcome, User!</p>
      ) : (
        <p style={{ color: "red" }}>Please Login</p>
      )}

      {/* Button to toggle login */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;

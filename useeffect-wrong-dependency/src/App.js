import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // ❌ WRONG useEffect dependency
  useEffect(() => {
    console.log("API called...");
  }, []);   // count missing ❌

  return (
    <div style={{ padding: "40px" }}>
      <h2>useEffect Incorrect Dependency Example</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default App;

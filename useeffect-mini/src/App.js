import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("components Render happened");

  useEffect(() => {
    console.log(" useEffect ran AFTER render");

    // Fake API call
    setTimeout(() => {
      setData([
        { id: 1, name: "Gajanika" },
        { id: 2, name: "React Student" },
        { id: 3, name: "useEffect Learner" },
      ]);
      setLoading(false);
    }, 2000);
  }, []); // after first render only

  return (
    <div style={{ padding: "20px" }}>
      <h1>useEffect After Render</h1>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

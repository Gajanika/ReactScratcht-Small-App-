import React from "react";

function App() {
  const fruits = [
    { id: 101, name: "Apple" },
    { id: 102, name: "Banana" },
    { id: 103, name: "Mango" },
    { id: 104, name: "Orange" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

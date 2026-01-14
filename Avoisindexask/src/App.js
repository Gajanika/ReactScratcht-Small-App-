import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Item A" },
    { id: 2, name: "Item B" },
  ]);

  const addItem = () => {
    const nextId = items.length + 1;
    setItems([...items, { id: nextId, name: `Item ${String.fromCharCode(64 + nextId)}` }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>List with Unique Keys</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default App;

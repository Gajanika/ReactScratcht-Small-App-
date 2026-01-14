import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
  <div style={{ padding: "20px" }}>
<h1 className="title">Styling Example</h1>
 <p>Counter: {count}</p>
      <
        button className="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button className="button" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default App;

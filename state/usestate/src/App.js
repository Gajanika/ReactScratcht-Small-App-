import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState Counter</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
//state என்றால் என்ன?

//👉 Component-க்குள்ள data
//👉 Change ஆனா UI re-render ஆகும்

//state = concept (idea)
//useState என்றால் என்ன?

//👉 state-ஐ Functional Component-ல use பண்ண hook

// = implementation (tool)

//👉 state = data
//👉 useState = data handle பண்ண tool

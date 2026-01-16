import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
//state use பண்ண React-லிருந்து useState hook import பண்ணுறோம்.
//count → current value

//setCount → value change பண்ண function

//0 → initial value
//JSX-ல state use
//<h1>Count: {count}</h1>
//Button click-ல state change
//<button onClick={() => setCount(count + 1)}>
//click ஆனதும் state change → UI auto update ✨
//✔ state → mutable (change ஆகும்)
//✔ state change ஆனா → component re-render ஆகும்
//✔ state → component-க்கு private
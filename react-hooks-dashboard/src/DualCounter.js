import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
}

export default function DualCounter() {
  const [count1, dispatch1] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer, 10);

  return (
    <div>
      <h3>Counter1 {count1}</h3>
      <button onClick={() => dispatch1("inc")}>+</button>

      <h3>Counter2 {count2}</h3>
      <button onClick={() => dispatch2("inc")}>+</button>
    </div>
  );
}
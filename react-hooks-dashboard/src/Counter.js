import React, { useReducer } from "react";

const initialState = 0;

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

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Simple Counter: {count}</h3>
      <button onClick={() => dispatch("inc")}>+</button>
      <button onClick={() => dispatch("dec")}>-</button>
    </div>
  );
}
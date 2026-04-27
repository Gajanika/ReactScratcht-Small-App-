import React, { useContext } from "react";
import { CountContext } from "./context/CountContext";

export default function GlobalCounter() {
  const { count, dispatch } = useContext(CountContext);

  return (
    <div>
      <h3>Global Counter {count}</h3>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
    </div>
  );
}
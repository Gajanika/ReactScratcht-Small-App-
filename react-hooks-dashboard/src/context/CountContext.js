import React, { createContext, useReducer } from "react";

export const CountContext = createContext();

const initialState = 0;

function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

export const CountProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};
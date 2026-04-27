import React, { createContext, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    loading: false,
    users: [],
    error: null,
  });

  const fetchUsers = async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  return (
    <UserContext.Provider value={{ state, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
};
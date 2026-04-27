import React, { createContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
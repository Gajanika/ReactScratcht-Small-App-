import React from "react";
import { TaskProvider } from "./context/TaskContext";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Users from "./components/Users";

import { useDocumentTitle } from "./hooks/useDocumentTitle";

function App() {
  useDocumentTitle("Smart Task App");

  return (
    <TaskProvider>
      <h1>Smart Task Manager</h1>

      <TaskInput />
      <TaskList />

      <hr />

      <Users />
    </TaskProvider>
  );
}

export default App;
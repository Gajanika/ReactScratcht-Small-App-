import React from "react";
import { TaskProvider } from "./context/TaskContext";
import { UserProvider } from "./context/UserContext";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Users from "./components/Users";

function App() {
  return (
    <TaskProvider>
      <UserProvider>
        <h1>Reducer + Context App</h1>

        <TaskInput />
        <TaskList />

        <hr />

        <Users />
      </UserProvider>
    </TaskProvider>
  );
}

export default App;
import React from "react";
import Counter from "./Counter";
import Form from "./Form";
import DualCounter from "./DualCounter";
import FetchUser from "./FetchUser";
import GlobalCounter from "./GlobalCounter";
import { CountProvider } from "./context/CountContext";

function App() {
  return (
    <CountProvider>
      <div>
        <h1>React Hooks Mini Project</h1>

        <Counter />
        <Form />
        <DualCounter />
        <GlobalCounter />
        <FetchUser />

      </div>
    </CountProvider>
  );
}

export default App;
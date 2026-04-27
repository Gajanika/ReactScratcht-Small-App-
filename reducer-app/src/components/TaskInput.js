import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskInput = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TaskContext);

  const addTask = () => {
    dispatch({ type: "ADD_TASK", payload: text });
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default TaskInput;
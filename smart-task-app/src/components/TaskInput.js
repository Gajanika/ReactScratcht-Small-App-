import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useInput } from "../hooks/useInput";

const TaskInput = () => {
  const { dispatch } = useContext(TaskContext);
  const input = useInput("");

  const addTask = () => {
    dispatch({ type: "ADD", payload: input.value });
    input.setValue("");
  };

  return (
    <div>
      <input {...input} />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default TaskInput;
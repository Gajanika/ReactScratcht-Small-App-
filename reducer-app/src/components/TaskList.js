import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() =>
            dispatch({ type: "DELETE_TASK", payload: task.id })
          }>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
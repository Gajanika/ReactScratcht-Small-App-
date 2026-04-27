import React from "react";

const TaskItem = React.memo(({ task, onDelete, onToggle }) => {
  console.log("Render:", task.text);

  return (
    <li>
      <span
        style={{
          textDecoration: task.done ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>

      <button onClick={() => onToggle(task.id)}>✔</button>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
});

export default TaskItem;
import React, { useContext, useCallback, useMemo } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  const deleteTask = useCallback(
    (id) => dispatch({ type: "DELETE", payload: id }),
    [dispatch]
  );

  const toggleTask = useCallback(
    (id) => dispatch({ type: "TOGGLE", payload: id }),
    [dispatch]
  );

  const completedCount = useMemo(() => {
    return tasks.filter(t => t.done).length;
  }, [tasks]);

  return (
    <div>
      <p>Completed: {completedCount}</p>

      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
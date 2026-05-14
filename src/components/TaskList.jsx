import React from "react";

const TaskList = ({ tasks, removeTask }) => {
  if (!tasks.length) return <p>Belum ada tugas...</p>;

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => removeTask(task.id)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

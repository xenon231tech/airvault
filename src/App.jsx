import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("airdropTasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("airdropTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([task, ...tasks]);
  const removeTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div className="container">
      <h1>AirVault – Airdrop Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;

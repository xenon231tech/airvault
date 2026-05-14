import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    addTask({ id: Date.now(), title: input });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Tulis tugas airdrop..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
};

export default TaskForm;

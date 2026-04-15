import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      alert("A feladat neve nem lehet üres.");
      return;
    }

    onAddTask(trimmedValue);
    setInputValue("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Új feladat hozzáadása..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Hozzáadás</button>
    </form>
  );
}

export default TaskForm;
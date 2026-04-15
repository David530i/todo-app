function TaskItem({ task, onDeleteTask, onToggleTask }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span>{task.text}</span>
      </div>

      <button className="delete-btn" onClick={() => onDeleteTask(task.id)}>
        Törlés
      </button>
    </li>
  );
}

export default TaskItem;
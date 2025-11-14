import React from "react";

export default function TodoItems({ todo, onDelete }) {
  return (
    <div className="todo-glass">
      <h4 className="todo-title">{todo.title}</h4>
      <p className="todo-desc">{todo.desc}</p>
      <button className="todo-delete-btn" onClick={() => onDelete(todo)}>
        Delete
      </button>
    </div>
  );
}

import React from "react";
import "./index.css";

function AddTodo() {
  return (
    <div className="todo-List">
      <h1> ToDo - List</h1>
      <div className="todo-input">
        <input
          id="add-todo-input"
          type="text"
          placeholder="React revison ...."
        />
        <button id="add-todo-btn">+</button>
      </div>
    </div>
  );
}

export default AddTodo;

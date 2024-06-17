import React from "react";
import "./index.css";

function Todos() {
  const todos = ["JS revision", "CSS revision", "W3 school goal"];

  return (
    <div className="todo-container">
      {todos.map((todo, index) => (
        <div className="todo-items">
          <div>{todo}</div>
          <div className="task-btn">
            <input type="checkbox" />
            <button className="task-dlt-btn">X</button>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
}

export default Todos;

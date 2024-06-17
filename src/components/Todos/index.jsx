import React from "react";
import "./index.css";
import {useSelector} from 'react-redux'

function Todos() {
  const todos = useSelector(store => store.todo)

  return (
    <div className="todo-container">
      {todos.map((todo, index) => (
        <div className="todo-items">
          <div key={index}>{todo.value}</div>
          <div className="task-btn">
            <input type="checkbox" />
            <button className="task-dlt-btn" >X</button>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
}

export default Todos;

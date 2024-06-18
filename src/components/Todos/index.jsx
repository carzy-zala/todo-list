import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../../action";

function Todos() {
  const todos = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const handleDoneTask = (index) => {
    dispatch(toggleTask(index));
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <div className="todo-container">
      {todos.map((todoData, index) => (
        <div key={index} className="todo-items">
          <div
            style={{
              textDecorationLine: todoData.checked ? "line-through" : "none",
            }}
          >
            {todoData.value}{" "}
          </div>
          <div className="task-btn">
            <input onChange={() => handleDoneTask(index)} type="checkbox" />
            <button
              className="task-dlt-btn"
              onClick={() => handleDeleteTodo(index)}
            >
              X
            </button>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
}

export default Todos;

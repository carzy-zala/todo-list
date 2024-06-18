import React from "react";
import "./index.css";
import { addTask } from "../../action";
import { useDispatch } from "react-redux";
import { useState } from "react";

function AddTodo() {
 
  const [task,setTask] = useState({value:'',checked:false})
  const dispach = useDispatch();
  
  const updateValue=(e)=>{
    const {name,value} = e.target
    setTask(values => ({...values,[name]:value}))
  }

  const handleAddTask = ()=>{
     dispach(addTask(task))
     setTask({value:'',checked:false})
  }

  return (
    <div className="todo-List">
      <h1> ToDo - List</h1>
      <div className="todo-input">
        <input
          id="add-todo-input"
          type="text"
          name="value"
          placeholder="React revison ...."
          value={task.value}
          onChange={updateValue}
        />
        <button id="add-todo-btn" onClick={handleAddTask}>+</button>
      </div>
    </div>
  );
}

export default AddTodo;

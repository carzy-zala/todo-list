export const ADD_ToDo = "ADD_ToDo";
export const DELETE_TODO = "DELETE_TODO";
export const TASK_TOGGLE = "TASK_TOGGLE";

export const addTask = (newTodo) => ({ type: ADD_ToDo, payload: newTodo });
export const deleteTask = (index) => ({ type: DELETE_TODO , payload:index});
export const toggleTask = (index) => ({ type: TASK_TOGGLE , payload:index});

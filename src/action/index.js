export const ADD_ToDo = "ADD_ToDo"
export const DELETE_TODO = "DELETE_TODO"
export const TASK_TOGGLE = "TASK_TOGGLE"

export const addTask = ()=> ({type: ADD_ToDo});
export const deleteTask = ()=> ({type: DELETE_TODO});
export const toggleTask = ()=> ({type: TASK_TOGGLE});

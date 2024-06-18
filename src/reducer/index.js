import { ADD_ToDo, DELETE_TODO, TASK_TOGGLE } from "../action/index";

const IntialList = {
  todo: [{ value: "JavaScript Revision", checked: false }],
};

export default function Reducer(state = IntialList, action) {
  switch (action.type) {
    case ADD_ToDo:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((val, index) => index !== action.payload),
      };
    case TASK_TOGGLE:
      return {
        ...state,
        todo: state.todo.filter((val, index) => {
          if (index === action.payload) {
            val.checked = !val.checked;
          }

          return val;
        }),
      };
    default:
      return state;
  }
}

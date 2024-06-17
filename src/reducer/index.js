import { ADD_ToDo, DELETE_TODO, TASK_TOGGLE } from "../action/index";

const IntialList = {
  todo: [],
};

export default function Reducer(state = IntialList, action) {
  switch (action.type) {
    case ADD_ToDo:
      return {
        ...state,
      };
    case DELETE_TODO:
      return {};
    case TASK_TOGGLE:
      return {};
    default:
      return state;
  }
}

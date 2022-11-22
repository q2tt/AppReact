import { SET_TASKS } from "./todoListTypes";

let initialState = {
  tasks: [],
};
const todoListReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS: {
      return { ...state, tasks: action.tasks };
    }
    default:
      return state;
  }
};
export default todoListReduser;

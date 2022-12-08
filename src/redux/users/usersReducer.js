import { SET_USERS, SET_USER } from "./usersTypes";

let initialState = {
  users: [],
  user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_USER: {
      return { ...state, user: action.user};
    }
    default:
      return state;
  }
};
export default userReducer;

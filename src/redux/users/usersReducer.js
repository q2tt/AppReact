import { SET_USERS } from "./usersTypes";

let initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    default:
      return state;
  }
};
export default userReducer;

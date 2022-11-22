import { SET_ALBUMS } from "./albumsTypes";

let initialState = {
  albums: [],
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUMS: {
      return { ...state, albums: action.payload };
    }

    default:
      return state;
  }
};
export default albumsReducer;

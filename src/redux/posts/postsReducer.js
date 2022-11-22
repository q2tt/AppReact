import { SET_POSTS, ADD_POST } from "./postsTypes";

let initialState = {
  posts: [1, 2],
};

const postsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return { ...state, posts: action.payload  };
    }
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload ]
      }
    }
    default:
      return state;
  }
};
export default postsReduser;

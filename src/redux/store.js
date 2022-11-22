import { applyMiddleware, combineReducers, createStore } from "redux";
import postsReduser from "./posts";
import todoListReduser from "./todoList";
import userReducer from "./users";
import albumsReducer from "./albums";
import thunk from "redux-thunk";
import usersTodoReducer from "./usersTodo";

const reducers = combineReducers({
  userList: userReducer,
  todoList: todoListReduser,
  postsList: postsReduser,
  albumsList: albumsReducer,
  usersTodo: usersTodoReducer
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;

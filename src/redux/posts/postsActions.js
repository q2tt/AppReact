import { postsAPI, usersAPI } from "../../api/api";
import { SET_POSTS, ADD_POST } from "./postsTypes";

const setPosts = (posts) => ({ type: SET_POSTS, payload: posts });

export const addPost = (post) => ({ type: ADD_POST, payload: post });

export const getPosts = () => async (dispatch) => {
  let response = await postsAPI.getPosts();
  dispatch(setPosts(response.data));
};

export const getUsersPosts = (id) => async (dispatch) => {
  let response = await usersAPI.getUserPosts(id);
  dispatch(setPosts(response.data));
};




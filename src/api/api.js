import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  data: {},
});

export const todoListAPI = {
  getTodoList() {
    return instance.get("todos").then((response) => {
      return response;
    });
  },
};

export const postsAPI = {
  getPosts() {
    return instance.get("posts").then((response) => {
      return response;
    });
  },
};

export const usersAPI = {
  getUsers() {
    return instance.get("users").then((response) => {
      return response;
    });
  },
  getUserAlbums(id) {
    return instance.get(`users/${id}/albums`).then((response) => {
      return response;
    });
  },
  getUserTodos(id) {
    return instance.get(`users/${id}/todos`).then((response) => {
      return response;
    });
  },
  getUserPosts(id) {
    return instance.get(`users/${id}/posts`).then((response) => {
      return response;
    });
  },
};

import { todoListAPI, usersAPI } from "../../api/api";
import { SET_TASKS } from "./todoListTypes";

const setTasks = (tasks) => ({ type: SET_TASKS, tasks });

export const getTasks = () => async (dispatch) => {
  let response = await todoListAPI.getTodoList();
  dispatch(setTasks(response.data));
};

export const getUsersTasks = (id) => async (dispatch) => {
  let response = await usersAPI.getUserTodos(id);
  dispatch(setTasks(response.data));
};




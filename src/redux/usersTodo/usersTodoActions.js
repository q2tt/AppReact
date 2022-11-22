import { usersAPI} from "../../api/api";
import { SET_TASKS } from "./usersTodoTypes";

const setTasks = (tasks) => ({ type: SET_TASKS, tasks });


export const getUsersTasks = (id) => async (dispatch) => {
  let response = await usersAPI.getUserTodos(id);
  dispatch(setTasks(response.data));
};





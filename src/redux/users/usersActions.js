import { usersAPI } from "../../api/api";
import { SET_USERS } from "./usersTypes";
import imgUsers from '../../images/imgUsers'

const setUsers = (users) => ({ type: SET_USERS, users });

export const getUsers = () => async (dispatch) => {
  let response = await usersAPI.getUsers();
  let users = response.data;
  for(let i =0; i < users.length; i++){
    users[i].img= imgUsers[i];
  }
  dispatch(setUsers(users));
};

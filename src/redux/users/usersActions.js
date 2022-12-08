import { usersAPI } from "../../api/api";
import { SET_USERS, SET_USER } from "./usersTypes";
import imgUsers from '../../images/imgUsers'

const setUsers = (users) => ({ type: SET_USERS, users });
const setUser = (user) => ({ type: SET_USER, user });

export const getUsers = () => async (dispatch) => {
  let response = await usersAPI.getUsers();
  let users = response.data;
  for(let i =0; i < users.length; i++){
    users[i].img= imgUsers[i];
  }
  dispatch(setUsers(users));
};

export const getUser = (id) => async (dispatch) => {
  let response = await usersAPI.getUser(id);
  let user = response.data;
  user.img= imgUsers[id-1];
  dispatch(setUser(user));
};

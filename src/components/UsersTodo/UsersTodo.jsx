import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UsersTodoItem from "./UsersTodoItem";
import { getUsersTasks } from "../../redux/usersTodo/usersTodoActions";
import s from '../TodoList/TodoList.module.scss'

const UsersTodo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.usersTodo.tasks);

  useEffect(() => {
    dispatch(getUsersTasks(id));
  }, []);

  return <div className={s.wrapper}> <div className={s.todo_container}>{tasks.map(function (task) {
    return <UsersTodoItem task={task} />;
  })}</div></div>
};

export default UsersTodo;

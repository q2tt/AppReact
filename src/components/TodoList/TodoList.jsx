import React, { useEffect } from "react";
import { getTasks } from "../../redux/todoList/todoListActions";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import s from "./TodoList.module.scss";

const TodoLisl = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todoList.tasks);
  
  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div className={s.wrapper}>
    <div className={s.todo_container}>
      {tasks.map(function (task) {
        return <TodoItem task={task} />;
      })}
    </div>
    </div>
  );
};

export default TodoLisl;

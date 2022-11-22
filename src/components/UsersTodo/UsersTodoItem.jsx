import React from "react";
import s from "./UsersTodo.module.scss";

const UsersTodoItem = ({ task }) => {
  return (
    <div>
      <p className={s.task}>{task.title}</p>
    </div>
  );
};
export default UsersTodoItem;

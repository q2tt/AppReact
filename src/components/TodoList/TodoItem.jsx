import React, { useState } from "react";
import s from "./TodoList.module.scss";

const TodoItem = ({ task }) => {
  const [editMode, setEditMode] = useState(false);
  const [item, setTask] = useState(task.title);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  };

  const onTaskChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <li
            onClick={() => {
              activateEditMode(item);
            }}
            className={s.task}
          >
            {item}
          </li>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={s.inp}
            onChange={onTaskChange}
            onBlur={deactivateEditMode}
            value={item}
          />
        </div>
      )}
    </div>
  );
};
export default TodoItem;

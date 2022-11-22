import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/users/usersActions";
import { useDispatch, useSelector } from "react-redux";
import s from "./UserList.module.scss";
import { AppRoutes } from "../../const/routes.ts";

const UserLisl = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userList.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <div className={s.users_container}>{ users.map(function (user) {
    return (
      <Link
        className={s.user__link}
        to={AppRoutes.UserInfo.replace(":id/", `${user.id}`)}
      >
        <div className={s.user}>
          <img className={s.user__photo} src={user.img} />
          <div className={s.user__txtBox}>
            <h2 className={s.user__name}>{user.name}</h2>
            <p className={s.user__userName}>{user.username}</p>
          </div>
        </div>
      </Link>
    );
   
  })}</div>
};

export default UserLisl;

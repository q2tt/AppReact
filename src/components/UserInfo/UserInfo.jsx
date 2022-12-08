import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getUser } from "../../redux/users/usersActions";
import s from "./UserInfo.module.scss";
import { AppRoutes } from "../../const/routes.ts";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  const user = useSelector((state) => state.userList.user);

  if (!user) return <div>...</div>;

  return (
    <div className={s.wrapper}>
      <div className={s.user}>
        <h1 className={s.user__title}>{user.name}</h1>
        <div className={s.user__infoBox}>
          <div className={s.user__imgBox}>
            <img className={s.user__img} src={user.img}></img>
          </div>
          <div className={s.user__datesBox}>
            <div className={s.user__itemsBox}>
              <img
                className={s.user__img_icon}
                src="https://img.icons8.com/neon/96/null/experimental-secured-letter-neon.png"
              />
              <p className={s.user__txt}>{user.email}</p>
            </div>
            <div className={s.user__itemsBox}>
              <img
                className={s.user__img_icon}
                src="https://img.icons8.com/neon/96/null/experimental-phone-neon.png"
              />
              <p className={s.user__txt}>{user.phone}</p>
            </div>
            <div className={s.user__itemsBox}>
              <img
                className={s.user__img_icon}
                src="https://img.icons8.com/neon/96/null/experimental-address-neon.png"
              />
              <p className={s.user__txt}>
                {user.address.city},{" "}
                <span className={s.user__txt_span}>{user.address.street}</span>{" "}
              </p>
            </div>
            <div className={s.user__itemsBox}>
              <img
                className={s.user__img_icon}
                src="https://img.icons8.com/color-glass/48/null/internet.png"
              />
              <p className={s.user__txt}>{user.website}</p>
            </div>
            <div className={s.user__itemsBox}>
              <img
                className={s.user__img_icon}
                src="https://img.icons8.com/neon/96/null/experimental-business-neon.png"
              />
              <p className={s.user__txt}>
                {user.company.name},{" "}
                <span className={s.user__txt_span}>{user.company.bs}</span>
              </p>
            </div>
          </div>
        </div>
        <div className={s.box_btns}>
          <Link
            to={AppRoutes.UserAlbums.replace(":id/", `${user.id}`)}
            className={s.link_btn}
          >
            Album
          </Link>
          <Link
            to={AppRoutes.UserTodo.replace(":id/", `${user.id}`)}
            className={s.link_btn}
          >
            To-do list
          </Link>
          <Link
            to={AppRoutes.UserPosts.replace(":id/", `${user.id}`)}
            className={s.link_btn}
          >
            Post List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

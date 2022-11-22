import { Link } from "react-router-dom";
import s from "./Navbar.module.scss";
import React from "react";
import { AppRoutes } from '../../const/routes.ts';

function Navbar() {
  return (
    <nav className={s.navbar}>
      <Link to={AppRoutes.UserList} className={s.navbar__link}>
        User list
      </Link>
      <Link to={AppRoutes.TodoList} className={s.navbar__link}>
        To-do list
      </Link>
      <Link to={AppRoutes.PostList.replace(":id", 'my')} className={s.navbar__link}>
        Post List
      </Link>
    </nav>
  );
}
export default Navbar;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { AppRoutes } from "./const/routes.ts";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList ";
import PostsPage from "./components/PostsPage";
import UserInfo from "./components/UserInfo";
import Albums from "./components/Albums/Albums";
import UsersTodo from "./components/UsersTodo";
import PostList from './components/PostList'

function App(props) {
  return ( 
    <div>
  <Navbar />
      <Routes>
        <Route exact path={AppRoutes.UserList} element={<UserList />} />
        <Route exact path={AppRoutes.TodoList} element={<TodoList />} />
        <Route exact path={AppRoutes.PostList} element={<PostsPage />} />
        <Route exact path={AppRoutes.UserInfo}  element={<UserInfo />} />
        <Route exact path={AppRoutes.UserAlbums}  element={<Albums />} />
        <Route exact path={AppRoutes.UserTodo}  element={<UsersTodo />} />
        <Route exact path={AppRoutes.UserPosts}  element={<PostList />} />
      </Routes>
      </div>
    
  );
}

export default App;


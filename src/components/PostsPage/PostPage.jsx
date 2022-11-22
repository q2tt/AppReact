import React from "react";
import AddPost from "../AddPost";
import PostList from "../PostList";
import s from "../PostList/PostList.module.scss";

const PostPage = () => {
  return (
    <div className={s.wrappoer}>
      <AddPost />
      <PostList />
    </div>
  );
};

export default PostPage;

import React, { useEffect } from "react";
import { getPosts, getUsersPosts } from "../../redux/posts/postsActions";
import { useDispatch, useSelector } from "react-redux";
import s from "./PostList.module.scss";
import { useParams } from "react-router-dom";

const PostList = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsList.posts);

  useEffect(() => {
    if (id == "my") {
      dispatch(getPosts());
    } else {
      dispatch(getUsersPosts(id));
    }
  }, []);

  return <div className={s.wrapper}> <div className={s.postsBox}>
    { posts.map(function (post) {
      return (
        <div className={s.post}>
          <h2 className={s.post__title}>{post.title}</h2>
          <p className={s.post__txt}>{post.body}</p>
        </div>
      );
  })}</div> </div>
};

export default PostList;

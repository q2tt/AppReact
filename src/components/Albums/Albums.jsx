import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAlbums } from "../../redux/albums/albumsActions";
import { useDispatch, useSelector } from "react-redux";
import s from "./Albums.module.scss";

const Albums = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albumsList.albums);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getAlbums(id));
  }, []);

  return (
    <div className={s.albums_container}>
      {albums.map(function (item) {
        return (
          <div className={s.post}>
            <h2 className={s.post__title}>{item.title}</h2>
            <img className={s.post__img} src={item.img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Albums;

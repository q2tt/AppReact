import { usersAPI } from "../../api/api";
import { SET_ALBUMS } from "./albumsTypes";
import imgAlbums from '../../images/imgAlbums'

const setAlbums = (albums) => ({ type: SET_ALBUMS, payload: albums });

export const getAlbums = (id) => async (dispatch) => {
  let response = await usersAPI.getUserAlbums(id);
  let albums = response.data;
  for(let i =0; i < albums.length; i++){
    let num = Math.floor(1 + Math.random() * (24 - 1));
    albums[i].img= imgAlbums[num];
  }
  dispatch(setAlbums(albums));
};

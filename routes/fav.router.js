import express from "express";

import { FavCtrl } from "../controllers/index.js";
import { validateToken } from "../midlewares/index.js";

const {
  getAllFavs,
  getOneFav,
  createFav,
  deleteFav,
  getAllFavsByUser,
  addElmentsFavs,
  addNewFavbyUser,
} = FavCtrl;

const router = express.Router();

const favRoutes = {
  GET_ALL: "/favs",
  CREATE: "/favs",
  ADD_FAV: "/user/fav",
  GET_ONE: "/favs/:id",
  DELETE: "/favs/:id",
  GET_ALL_BY_USER: "/user/favs/:id",
  ADD_ELEMNTS: "/favs/add/:id",
};

router.get(favRoutes.GET_ALL, validateToken, getAllFavs);
router.get(favRoutes.GET_ALL_BY_USER, getAllFavsByUser);
router.get(favRoutes.GET_ONE, validateToken, getOneFav);
router.post(favRoutes.CREATE, validateToken, createFav);
router.put(favRoutes.ADD_ELEMNTS, addElmentsFavs);
router.delete(favRoutes.DELETE, validateToken, deleteFav);
router.post(favRoutes.ADD_FAV, addNewFavbyUser);

export default router;

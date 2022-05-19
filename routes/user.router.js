import express from "express";

import { UserCtrl } from "../controllers/index.js";

const { login, createUser, getAllUsers, addNewFavbyUser } = UserCtrl;

const router = express.Router();
const userroutes = {
  LOGIN: "/login",
  CREATE: "/users/create",
  GET_ALL: "/users",
};

router.post(userroutes.LOGIN, login);
router.post(userroutes.CREATE, createUser);
router.get(userroutes.GET_ALL, getAllUsers);

export default router;

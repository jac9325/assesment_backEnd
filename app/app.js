import express from "express";
import { UserCtrl } from "../controllers/index.js";
import { UserRouter, FavRouter } from "../routes/index.js";
const { getAllUsers } = UserCtrl;

/**
 * Express
 */
const app = express();

//Midleware
app.use(express.json());

//Routes
app.get("/", (request, response) => {
  response.send("Hola!!! API FAVS");
});

//rutas para el test
app.get("/api/user/uri", getAllUsers);

app.use("/api", UserRouter);
app.use("/api", FavRouter);

export default app;

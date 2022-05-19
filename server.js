import express from "express";
import mongoose from "mongoose";

import { UserRouter, FavRouter } from "./routes/index.js";

import "dotenv/config";
/**
 * Mongoose
 */

//connect db
await mongoose.connect(process.env.MONGODB_URI);

//Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("Connection error", e);
});

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

app.use("/api", UserRouter);
app.use("/api", FavRouter);

const PORT = process.env.PORT || 4000;

// Launch server
app.listen(4000, () => {
  console.log("Initialize server!!");
});

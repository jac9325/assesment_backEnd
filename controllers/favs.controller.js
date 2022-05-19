import { response } from "express";
import { User, Fav } from "../models/index.js";
import mongoose from "mongoose";

export const getAllFavs = async (request, response) => {
  try {
    const favs = await Fav.find();
    if (favs.length > 0) {
      response.status(200).json(favs);
    } else {
      reponse.status(204).send();
    }
  } catch (e) {
    response.status(500).json({ error: e });
  }
};

export const getOneFav = async (req, res) => {
  try {
    const { id: idFav } = req.params;
    const fav = await Fav.findById(idFav);
    res.status(200).json(fav);
  } catch (e) {
    res.status(500).send();
  }
};

export const createFav = async (req, res) => {
  try {
    const fav = new Fav(req.body);
    await fav.save();
    res.status(201).json(fav);
  } catch (e) {
    response.status(500).json({ error: e });
  }
};

export const deleteFav = async (request, response) => {
  const { id: idfav } = request.params;
  try {
    const fav = await Fav.findById(idfav);
    if (!fav) {
      response.status(204).json({ error: "No fav to delete" });
    } else {
      const deletedFav = await Fav.deleteOne(fav);
      if (deletedFav) response.status(200).send(deletedFav);
      else response.status(204).send();
    }
  } catch (error) {
    response.status(500).json({ error });
  }
};
export const getAllFavsByUser = async (req, res) => {
  const { id: iduser } = req.params;
  try {
    const user = await User.findById(iduser);
    const { list } = user;

    var listFavs = [];
    for (let item of list) {
      const fav = await Fav.findById(item);
      listFavs.push(fav);
    }

    res.status(200).json(listFavs);
    //response.status(200).json(listFavs);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const addElmentsFavs = async (req, res) => {
  const { id: idFav } = req.params;
  const newFavourite = req.body;
  try {
    const favToUpdate = await Fav.findById(idFav);
    if (favToUpdate) {
      const favSave = await Fav.addNewItem(favToUpdate, newFavourite);
      if (favSave) {
        res.status(20).json(favSave);
      } else {
        res.status(400).send();
      }
    } else {
      res.status(404).send();
    }
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

export const addNewFavbyUser = async (req, res) => {
  const { id: idUser, fav } = req.body;
  try {
    const user = await User.findById(idUser);
    if (user) {
      //create a new list Fav
      const newFav = new Fav(fav);
      await newFav.save();
      const lastFav = await Fav.find().sort({ $natural: -1 }).limit(1);
      if (lastFav) {
        //add to list
        const idFav = lastFav[0]._id;

        const userUpdate = User.addNewList(user, idFav);
        res.status(200).json(user);
      } else {
        res.status(400).send({ error: "no se pudo crear" });
      }
    } else {
      res.status(404).send({ error: "Usuario no encontrado" });
    }
  } catch (e) {
    res.status(500).send();
  }
};

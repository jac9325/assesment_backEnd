import mongoose from "mongoose";
const { Schema, SchemaTypes } = mongoose;
//Schema Users
const schemaFavs = new Schema({
  name: String,
  list_favs: [
    {
      title: String,
      description: String,
      enlace: String,
    },
  ],
});

// add a new favourite to the list
schemaFavs.statics.addNewItem = function (currentList, newItem) {
  currentList.list_favs = [...currentList.list_favs, newItem.id];
  return currentList.save();
};
//User models
const Fav = mongoose.model("Fav", schemaFavs, "favs");

export default Fav;

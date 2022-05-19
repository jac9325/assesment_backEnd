import mongoose from "mongoose";
const { Schema, SchemaTypes } = mongoose;

//Schema Users
const schemaUsers = new Schema({
  name: String,
  email: String,
  password: String,
  list: [],
});
// add a new favourite to the list
schemaUsers.statics.addNewList = function (currentList, newId) {
  currentList.list = [...currentList.list, newId];
  return currentList.save();
};
//User models
const User = mongoose.model("User", schemaUsers, "users");

export default User;

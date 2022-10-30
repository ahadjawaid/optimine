const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  uuid: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
});

const UserModel = mongoose.model("user", UserSchema)

exports.UserModel = UserModel;
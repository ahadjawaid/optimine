const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  uuid: {
    type: String,
    unique: true,
  },
  stripeCustomerId: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
});

const User = mongoose.model("user", UserSchema)
exports.User = User;
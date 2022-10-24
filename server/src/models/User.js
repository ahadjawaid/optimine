const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    oAuthID: {
        type: String,
        unique: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    country: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        unique: true,
    },
    phoneNumber: {
        type: String,
    },
});

const UserModel = mongoose.model("user", UserSchema)

exports.UserModel = UserModel;
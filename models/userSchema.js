const { Schema, model } = require("mongoose");

const user = new Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },

  token: String,
  //   avatar: {
  //     type: String,
  //     default: null,
  //   },

  //----->> Later
});
const User = model("user", user);

module.exports = User;

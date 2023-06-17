const mongoose = require("mongoose");
const AuthSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    location: String,
  },
  { timestamps: true }
);

const AuthModel = mongoose.model("auth", AuthSchema);

module.exports = {
  AuthModel,
};

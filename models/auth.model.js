const mongoose = require("mongoose");
const AuthSchema = new mongoose.Schema(
  {
    fullName: {
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
    phone: {
      type: Number,
      required: true,
      max: 10,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
   profilePicture: {
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

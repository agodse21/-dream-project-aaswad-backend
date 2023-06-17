const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { AuthModel } = require("../models/auth.model");

const Register = async (req, res) => {
  const { fullName, email, phone, password, profilePicture } = req.body;
  const isUser = await AuthModel.findOne({
    $or: [{ email: email }, { phone: phone }],
  });
  if (isUser) {
    res.status(500).json({ error: "User already exist" });
  } else {
    bcrypt.hash(password, 4, async function (err, hash) {
      if (err) {
        res
          .status(500)
          .json({ error: "Something went wrong!,Please try after sometime" });
      }
      const newUser = new AuthModel({
        fullName,
        email,
        password: hash,
        profilePicture,
      });
      try {
        const savedUser = await newUser.save();
        res.status(201).json({ msg: "Signup successful" });
      } catch (err) {
        res
          .status(500)
          .json({ error: "Something went wrong!,Please try after sometime" });
      }
    });
  }
};

const Login = async (req, res) => {
  const { phone } = req.body;
};

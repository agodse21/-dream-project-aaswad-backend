const express = require("express");

const { AuthController } = require("../controllers/auth.controller");
const { upload } = require("../middlewares/FileUploader");

const AuthRouter = express.Router();
AuthRouter.post("/login", AuthController.Login);
AuthRouter.post("/signup", upload.single("picture"), AuthController.Register);

module.exports = {
  AuthRouter,
};

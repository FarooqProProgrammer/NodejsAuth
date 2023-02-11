const express = require("express")
const userAuth = require("../Controllers/userAuthController")
const User = require("../models/userAuthModel")

const Router = express.Router();





Router.get("/AuthUsers",userAuth.getUser);
Router.post("/AuthUserRegister",userAuth.userRegister);
Router.post("/login",userAuth.userLogin);
Router.post("/logout",userAuth.Logout);

module.exports = Router
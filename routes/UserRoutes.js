const express = require("express")
const userAuth = require("../Controllers/userAuthController")
const User = require("../models/userAuthModel")

const Router = express.Router();





Router.get("/AuthUsers",userAuth.getUser)

module.exports = Router
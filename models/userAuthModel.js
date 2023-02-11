const mongoose = require("mongoose")

const Schema = mongoose.Schema


const userAuthSchema = new Schema({
        Name:String,
        Email:String,
        Password:String
})

const user = mongoose.model("userAuth",userAuthSchema)
module.exports = user
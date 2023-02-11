const mongoose = require("mongoose")

const Schema = mongoose.Schema


const userAuthSchema = new Schema({
    Name:{
        required:true,
        type:String
    },
    Email:{
        required:true,
        type:String
    },
    Password:{
        required:true,
        type:String
    },
})

const user = mongoose.model("userAuth",userAuthSchema)
module.exports = user
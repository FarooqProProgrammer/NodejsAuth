const User = require("../models/userAuthModel")
class userAuth {

     static getUser(req,res){
        res.send("Success")
    }

    static async userRegister(req,res){
        const data = new User(req.body)
        await data.save()
        res.send("Success")
    }
}

module.exports =  userAuth
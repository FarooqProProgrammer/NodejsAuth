const User = require("../models/userAuthModel")
class userAuth {

    static getUser(req, res) {
        res.send("Success")
    }
    // ====================== Register ======================
    static async userRegister(req, res) {
        const data = new User(req.body)
        await data.save()
        res.send("Success")
    }

    // ==================== Login =============================
    static async userLogin(req, res) {
        const { Email } = req.body
        console.log(Email);

        const user = User.findOne({ Email });
        console.log(user);
        if (!user) {
            res.send({ message: "User Not Found" })
            return;
        }
        res.send({ message: "User Found", data: user })
    }
}

module.exports = userAuth
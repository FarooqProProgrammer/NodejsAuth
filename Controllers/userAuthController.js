const User = require("../models/userAuthModel")
const bcrypt = require('bcryptjs');

class userAuth {

    static  async getUser(req, res) {
       const data =await User.find();
       res.send(data)
    }
    // ====================== Register ======================
    static async userRegister(req, res) {
        const { Name, Password, Email } = req.body

        var salt = bcrypt.genSaltSync(10);
        var hashPassword = bcrypt.hashSync(Password, salt);

        const data = new User({
            Name: Name,
            Email: Email,
            Password:hashPassword
        })
        await data.save()
        res.send(data)
    }

    // ==================== Login =============================
    static async userLogin(req, res) {
        const { Email, Password } = req.body

        console.log(Email);

        const user = await User.findOne({ Email });
        if (!user) {
            res.send({ message: "User Not Found" })
            return;
        }

        // ============ Compare Password ====================
        const compare = bcrypt.compareSync(Password, user.Password);

        if (!compare) {
            res.send({ message: "Invalid Password" })
            return;
        }


        const token = await user.generateToken();
        res.header("x-auth", token);
        res.send({ message: "user Found", data: user ,token:token})



    }



    // ---------------------- Logout -----------------------------------
    static async  Logout(req,res) {
     
            const token = req.header("x-auth");
        
            User.removeToken(token)
                .then(() => res.send({message: "removed token"}))
                .catch(err => res.send(err))
        }
    }


module.exports = userAuth
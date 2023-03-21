const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema


const userAuthSchema = new Schema({
        Name: String,
        Email: String,
        Password: String,
        tokens: [String]
})
userAuthSchema.methods.generateToken = function () {
        const user = this;
        const { _id } = user;
        const token = jwt.sign({ _id }, "Farooq0982j");

        user.tokens.push(token);
        return user.save().then(() => token)
}

userAuthSchema.statics.removeToken = function (token) {
        const User = this;
        decoded = jwt.verify(token, "Farooq0982j");

        return User.findOneAndUpdate({ _id: decoded._id }, { $pull: { tokens: token } })
}
const user = mongoose.model("userAuthApi", userAuthSchema)
module.exports = user
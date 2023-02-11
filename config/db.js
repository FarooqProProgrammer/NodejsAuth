const mongoose = require("mongoose");

// connection URI
const mongoURI = "mongodb://localhost:27017/Authe";

// remove deprecation warning of collection.ensureIndex
mongoose.set('strictQuery', false);


// connect to mongodb
mongoose.connect(mongoURI, {useNewUrlParser: true})

module.exports = mongoose;
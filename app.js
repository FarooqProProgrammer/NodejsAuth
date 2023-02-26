const express = require("express")
const cors = require("cors")
var bodyParser = require('body-parser')
const db = require('./config/db')
const userRoutes = require("./routes/UserRoutes")


const app = express()
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())


// ======================= ALL Routes ==================================
app.use("/Api",userRoutes)

app.listen(3000,()=> console.log("APP is Listen on http://localhost:3000"))
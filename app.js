const express = require("express")
const db = require('./config/db')
const userRoutes = require("./routes/UserRoutes")


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// ======================= ALL Routes ==================================
app.use("/Api",userRoutes)

app.listen(3000,()=> console.log("APP is Listen on http://localhost:3000"))
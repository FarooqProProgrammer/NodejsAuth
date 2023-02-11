const express = require("express")
const db = require('./config/db')
const userRoutes = require("./routes/UserRoutes")


const app = express();
app.use(express.json())
db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))


// ======================= ALL Routes ==================================
app.use("/Api",userRoutes)

app.listen(3000,()=> console.log("APP is Listen on http://localhost:3000"))
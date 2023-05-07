const express = require("express")
const app = express()
require("dotenv").config()
const dbConfig = require("./config/dbConfig")
const port = process.env.PORT || 5000;
app.use(express.json())

const usersRoutes = require("./routes/usersRoutes")

app.use("/api/users", usersRoutes)
app.listen(port, () => console.log(`Listening on port ${port}`))
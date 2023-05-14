const express = require("express")
const app = express()
require("dotenv").config()
const dbConfig = require("./config/dbConfig")
const port = process.env.PORT || 5000;
app.use(express.json())

const usersRoute = require("./routes/usersRoutes")
const trainRoute = require("./routes/trainRoutes")
const bookingRoute = require("./routes/bookingRoute")

app.use("/api/users", usersRoute)
app.use("/api/trains", trainRoute)
app.use("/api/bookings", bookingRoute)

app.listen(port, () => console.log(`Listening on port ${port}`))
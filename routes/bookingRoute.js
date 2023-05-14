const router = require("express").Router()
const authMiddleware = require("../middlewares/authMiddleware")
const Booking = require("../models/bookingModel")
const Train = require("../models/trainModel")

//Book a seat
router.post("/book-seat", async (req, res) => {
  try {
    const newBooking = new Booking({
      ...req.body,
      transactionId: "1234",
      user: req.body.userId
    })
    await newBooking.save()
    const train = await Train.findById(req.body.train)
    train.seatsBooked = [...train.seatsBooked, ...req.body.seats]
    res.status(200).send({
      message: "Booking successful",
      data: newBooking,
      success: true,
    })
  } catch (error) {
    res.status(500).send({
      message: "Booking failed",
      data: error,
      success: false,
    })
  }
})

module.exports = router;
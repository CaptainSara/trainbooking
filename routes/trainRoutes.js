const router = require("express").Router()
const Train = require("../models/trainModel")


//Post trains
router.post("/add-train", async (req, res) => {

  try {
    const existingTrain = await Train.findOne({number: req.body.number})
    if(existingTrain) {
      return res.status(200).send({
        success: false,
        message: "Train already exists"
      })
    }
    const newTrain = new Train(req.body)
    await newTrain.save()
    return res.status(200).send({
      success: true,
      message: "Train added successfully",
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    })
  }
})

//get trains
//router.get("/get-all-trains", authMiddleware, async (req, res) => {
router.get("/get-all-trains", async (req, res) => {
  try {
    const trains = await Train.find()
    return res.status(200).send({
      success: true,
      message: "Trains fetched successfullt",
      data: trains,
    })
  } catch (error) {
    res.status(500).send({success: flase, message: error.message})
  }
})

module.exports = router
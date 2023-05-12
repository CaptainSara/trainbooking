const router = require("express").Router()
const Train = require("../models/trainModel")

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

module.exports = router
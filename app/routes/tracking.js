import express from "express"
import TrackingController from "../controllers/tracking"

const router = express.Router()
const controller = new TrackingController()

router
  .route("/")
  .post( (req, res, next) =>  controller.add(req, res, next) )

module.exports = router
import express from "express"
import TerritoryController from "../controllers/territory"

const router = express.Router()
const controller = new TerritoryController()

router
  .route("/")
  .get( (req, res, next) =>  controller.list(req, res, next))

router
  .route("/")
  .post( (req, res, next) =>  controller.add(req, res, next))

module.exports = router
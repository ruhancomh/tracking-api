import express from "express"
import tracking from "./tracking"
import territory from "./territory"

const router = express.Router()

router.use("/tracking", tracking)
router.use("/territories", territory)

module.exports = router;
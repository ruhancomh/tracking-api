import express from "express"
import bodyParser from "body-parser"
import helmet from "helmet"
import cors from "cors"
import routes from "../routes"

module.exports = function () {
  let app = express()

  app.use(helmet())
  app.use(cors())
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(routes)

  return app
}
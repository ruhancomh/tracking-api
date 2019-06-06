import dotenv from "dotenv"
dotenv.config()

const app = require("./app/config/express")()

app.listen(process.env.SERVER_PORT, function(){
  console.log(`Server is running on port ${process.env.SERVER_PORT}`)
})

module.exports = app
const app = require("./app/config/express")()

app.listen(8000, function(){
  console.log(`Server is running on port 8000`)
})

module.exports = app
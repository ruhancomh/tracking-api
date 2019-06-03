"use strict"

class TrackingController {
  
  constructor () {
    this.API_KEY = "fcdcd1e2524d5ece4627f013eb428ed0209f4cec"
    this.API_BASE_URL = "https://app.readytrack.com.au/api/v1/"
    this.api = require("needle")
  }

  async add(req, res, next) {
    let fs = require('fs')

    let data = req.body // this is the data received from GPS when the car enter on the territory, should be saved on a database
    
    let fileName = Date.now();
    let filePath = __dirname + `/../../logs/${fileName}.txt`
    fs.appendFileSync(filePath, JSON.stringify(data));

    return res.status(200).send()
  }

}

module.exports = TrackingController
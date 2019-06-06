"use strict"

class TerritoryController {
  constructor () {
    this.API_KEY = "fcdcd1e2524d5ece4627f013eb428ed0209f4cec"
    this.API_BASE_URL = "https://app.readytrack.com.au/api/v1/"
    this.api = require("needle")
  }

  /**
   * List all territories
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async list(req, res, next) {    
    this.api.get(`${this.API_BASE_URL}object/list.json?key=${this.API_KEY}`, function(err, response) {
      if (!err && response.statusCode == 200){
        return res.status(200).send({        
          data: response.body
        })
      }else{
        console.log(err)
      }
    })
  }

  /**
   * Add a new territory
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async add (req, res, next) {
    let territory = {
      key: this.API_KEY,
      name: req.body.name,
      wkt: req.body.wkt
    }

    this.api.post(`${this.API_BASE_URL}object/save.json`, territory, null, function(err, response) {
      if (!err && response.statusCode == 200){

        return res.status(200).send({        
          data: response.body
        })
      }else{
        console.log(err)
      }
    })
  }
}

module.exports = TerritoryController
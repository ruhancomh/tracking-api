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
      // id: 000 , // necessary to update the territory
      name: "teste-territory",
      wkt: "POLYGON((-33.89173455517197 151.17485225200653,-33.89269193715352 151.17443919181824,-33.89254944377188 151.17527067661285,-33.89173455517197 151.17485225200653,-33.89173455517197 151.17485225200653))"
      // user_id: 000
      // group_id: 000
      // private: "Y"
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
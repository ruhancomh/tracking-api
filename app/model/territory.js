import mongoose from "mongoose"

const territorySchema = mongoose.Schema({
  api_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  wkt: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  },
  deleted: {
    type: Boolean,
    default: false
  }
})

class TerritoryModel {
  constructor () {
    this.model = mongoose.model("territory",territorySchema)
  }

  static productsSchema () {
    return productsSchema
  }

  create (data) {
    return this.model.create(data)
  }

}

module.exports = TerritoryModel
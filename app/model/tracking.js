import mongoose from "mongoose"

const trackingSchema = mongoose.Schema({
  tracking_id: {
    type: String
  },
  car_id: {
    type: String
  },
  pack_id: {
    type: String
  },
  company_id: {
    type: String
  },
  gmt: {
    type: String
  },
  object_id: {
    type: String
  },
  object_name: {
    type: String
  },
  type: {
    type: String
  },
  lat: {
    type: Number
  },
  lat: {
    type: Number
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

class TrackingModel {
  constructor () {
    this.model = mongoose.model("tracking",trackingSchema)
  }

  static productsSchema () {
    return productsSchema
  }

  create (data) {
    return this.model.create(data)
  }

}

module.exports = TrackingModel
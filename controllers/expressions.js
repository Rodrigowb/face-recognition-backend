// Import the model
import expressionsModel from '../models/expressions.js'

// Create the crud controller for the API
let expressionsController = {
  // Create (C)
  create(request, response) {
    expressionsModel
      .create(request.body)
      .then(result => response.json(result))
  },
  // Read (R)
  getAll(request, response) {
    expressionsModel
      .find({})
      .then(result => response.json(result))
  },
  getByDatetime(request, response) {
    expressionsModel
      .find({ datetime: request.params.datetime })
      .then(result => response.json(result))
  },
  getByEmotion(request, response) {
    expressionsModel
      .find({ emotion: request.params.emotion })
      .then(result => response.json(result))
  },
  getByEmail(request, response) {
    expressionsModel
      .find({ email: request.params.email })
      .then(result => response.json(result))
  },
  // Update (U)
  updateByEmail(request, response) {
    expressionsModel
      .updateOne(request.params, request.body, { new: true })
      .then(result => response.json(result))
  },
  // Delete (D)
  deleteByDatetime(request, response) {
    expressionsModel
      .deleteOne(request.params)
      .then(result => response.json(result))
  },
  deleteByEmail(request, response) {
    expressionsModel
      .deleteMany(request.params)
      .then(result => response.json(result))
  }
}

// Export controller
export default expressionsController
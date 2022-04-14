// Import the model
import { expressionsModel as model } from './expressions.js'

// Create the crud controller for the API
let expressionsControllers = {
  // Create (C)
  create(request, response) {
    model
      .create(request.body)
      .then(result => response.json(result))
  },
  // Read (R)
  getAll(request, response) {
    model
      .find({})
      .then(result => response.json(result))
  },
  getByDatetime(request, response) {
    model
      .find({ datetime: request.params.datetime })
      .then(result => response.json(result))
  },
  getByEmotion(request, response) {
    model
      .find({ emotion: request.params.emotion })
      .then(result => response.json(result))
  },
  getByUserId(request, response) {
    model
      .find({ userId: request.params.userId })
      .then(result => response.json(result))
  },
  // Update (U)
  updateByUserId(request, response) {
    model
      .updateOne(request.params, request.body, { new: true })
      .then(result => response.json(result))
  },
  // Delete (D)
  deleteByDatetime(request, response) {
    model
      .deleteOne(request.params)
      .then(result => response.json(result))
  },
  deleteByUserId(request, response) {
    model
      .deleteMany(request.params)
      .then(result => response.json(result))
  }
}

// Export controller
export default expressionsControllers
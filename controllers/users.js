// Import the model
import { usersModel as model } from "../models/users.js"

// Create the crud controller for the model
dataController = {
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
  getByEmail(request, response) {
    model
      .find({ email: request.params.email })
      .then(result => response.json(result))
  },
  getByFirstName(request, response) {
    model
      .find({ firstName: request.params.firstName })
      .then(result => response.json(result))
  },
  getByLastName(request, response) {
    model
      .find({ lastName: request.params.lastName })
      .then(result => response.json(result))
  },
  getByPassword(request, response) {
    model
      .find({ password: request.params.password })
      .then(result => response.json(result))
  },
  // Update (U)
  updateByEmail(request, response) {
    model
      .updateOne(request.params, request.body, { new: true })
      .then(result => response.json(result))
  },
  // Delete (D)
  deleteByEmail(request, response) {
    model
      .deleteOne(request.params)
      .then(result => response.json(result))
  },
  deleteByPassword(request, response) {
    model
      .deleteOne(request.params)
      .then(result => response.json(result))
  }
}

// Export controller
export default dataController;
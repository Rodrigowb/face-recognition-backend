// Import the model
import usersModel from "../models/users.js"

// Create the crud controller for the model
let dataController = {
  // Create (C)
  create(request, response) {
    usersModel
      .create(request.body)
      .then(result => response.json(result))
  },
  // Read (R)
  getAll(request, response) {
    usersModel
      .find({})
      .then(result => response.json(result))
  },
  getByEmail(request, response) {
    usersModel
      .find({ email: request.params.email })
      .then(result => response.json(result))
  },
  getByFirstName(request, response) {
    usersModel
      .find({ firstName: request.params.firstName })
      .then(result => response.json(result))
  },
  getByLastName(request, response) {
    usersModel
      .find({ lastName: request.params.lastName })
      .then(result => response.json(result))
  },
  getByPassword(request, response) {
    usersModel
      .find({ password: request.params.password })
      .then(result => response.json(result))
  },
  // Update (U)
  updateByEmail(request, response) {
    usersModel
      .updateOne(request.params, request.body, { new: true })
      .then(result => response.json(result))
  },
  // Delete (D)
  deleteByEmail(request, response) {
    usersModel
      .deleteOne(request.params)
      .then(result => response.json(result))
  },
  deleteByPassword(request, response) {
    usersModel
      .deleteOne(request.params)
      .then(result => response.json(result))
  }
}

// Export controller
export default dataController;
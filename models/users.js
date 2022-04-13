// Import libraries
import mongoose from "mongoose"

// Create a schema
const Schema = mongoose.Schema

// Create the schema for the model
let Users = new Schema({
  // TODO: define variables
})

// Create a model
let usersModel = mongoose.model("usersModel", Users)

// Export models
export default usersModel
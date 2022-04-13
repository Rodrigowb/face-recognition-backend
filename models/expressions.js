// Import libraries
import mongoose from "mongoose"

// Create a schema
const Schema = mongoose.Schema

// Create the schema for the model
let Expressions = new Schema({
  // TODO: define variables
})

// Create a model
let expressionsModel = mongoose.model("expressionsModel", Expressions)

// Export model
export default expressionsModel
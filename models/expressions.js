// Import libraries
import mongoose from "mongoose"
import usersModel from "./users.js"

// Create a schema
const Schema = mongoose.Schema

// Create the schema for the model
let Expressions = new Schema({
  "datetime": {
    type: Date,
  },
  "emotion": {
    type: String,
  },
  "userId": {
    type: mongoose.Schema.Types.ObjectId,
    ref: usersModel
  }
})

// Create a model
let expressionsModel = mongoose.model("expressionsModel", Expressions);

// Export model
export default expressionsModel;
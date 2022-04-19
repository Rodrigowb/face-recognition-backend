// Importing supertest
import request from 'supertest'
// Importing the server
import app from '../server.js'
// Importing mongoose
import mongoose from "mongoose"
// Import expressions model
import expressionsModel from '../models/expressions.js'

beforeAll(async () => {
  // Create a test db url
  const MONGO_DB_TEST_URI = "mongodb://127.0.0.1:27017/test-faceapi"

  // Close the existent connection to the database, so we can connect to the test db
  await mongoose.connection.close()

  // Connect to the test db
  mongoose.connect(MONGO_DB_TEST_URI, { useUnifiedTopology: true, useNewUrlParser: true })

  // Test get request
})
// Import the mongodb connection and models
import db from './db/connection.js'
import expressionsModel from './models/expressions.js'
import usersModel from './models/users.js'
import fs from 'fs'

// Importing the json file to seed the database
let rawExpressions = fs.readFileSync('./expressions.json');
let rawUsers = fs.readFileSync('./users.json');
let parsedExpressions = JSON.parse(rawExpressions);
let parsedUsers = JSON.parse(rawUsers);

// Seeding the two models of the database
const insertData = async () => {
  await db.dropDatabase();
  await expressionsModel.insertMany(parsedExpressions);
  await usersModel.insertMany(parsedUsers);
  db.close()
}

// Seed the db
insertData();
# Deployed project

https://backend-fr.herokuapp.com/api/

# Files description

## db/connection.js

Set the connection with Mongodb and event listener for feedback about the connection.

## models/expressions.js

Create a Mongoose schema and model to store the expressions.

## models/users.js

Create a Mongoose schema and model to store the users login data.

## controllers/expressions.js

Create a controller for the expressions model. It defines the callback functions of the API endpoints.

## controllers/users.js

Create a controller for the users model. It defines the callback functions of the API endpoints.

## routes/expressions.js

Create the API endpoints, setting the CRUD parameters for the client access the API, by creating, reading, updating and deleting data.

## routes/users.js

Create the API endpoints, setting the CRUD parameters for the client access the API, by creating, reading, updating and deleting data.

## routes/index.js

Manage all the routers from our API and allows the application to scale, if It needs more database models and routers.

## expressions.json

Sample JSON file with the initial information to seed and test the expressions database model.

## users.json

Sample JSON file with the initial information to seed and test the users database model.

## seed/seed.js

Create the initial content on the Mongodb, using the predefined structure created on the models and using the crypto-data.json file.<br/>
**BE AWARE: this file must be run only once or if you are in a development environment. It drops all the database and seed it with the seeding json file.**

## server.js

**Main file to run the project.** </br>
Set the connection with the server and setting all the middlewares, and creating event listeners for server connection feedback.

## package.json

Set the dependencies of the project and the script to run the main and seed scripts.

# API endpoints

## Base endpoint

`https://backend-fr.herokuapp.com/api/`

# Expressions model

## Create new expressions

POST: `/expressions`

## Get all expressions data

GET: `/expressions`

## Get the data by the datetime

GET: `/expressions/datetime/:datetime`

## Get the data by the emotion

GET: `/expressions/emotion/:emotion`

## Get the data by email

GET: `/expressions/email/:email`

## Update data by email

PUT: `/expressions/email/:email`

## Delete data by datetime

DELETE: `/expressions/datetime/:datetime`

## Delete data by email

DELETE: `/expressions/email/:email`

# Users model

## Create new user

POST: `/users`

## Get all users data

GET: `/users`

## Get the data by email

GET: `/users/email/:email`

## Get the data by first name

GET: `/users/firstname/:firstname`

## Get the data by last name

GET: `/users/lastname/:lastname`

## Get the data by password

GET: `/users/password/:password`

## Update data by email

PUT: `/users/email/:email`

## Delete data by email

DELETE: `/users/email/:email`

## Delete data by password

DELETE: `/users/password/:password`

## Delete data by id

DELETE: `/users/id/:id`

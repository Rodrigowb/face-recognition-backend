// Import the database connection and the routes
import db from "./db/connection.js";
import routes from "./routes/index.js";

// Importing styling and log dependencies
import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

// Create an app and set the port
const app = express();
const PORT = process.env.PORT || 3000;

// Set the default middlewares
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

// Set the default route for all requests
app.use("/api", routes);

// Connect to the database and the server
db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB"));
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log("Express running in production on PORT " + PORT)
      : console.log("Express running in development on PORT " + PORT)
  })
})

// Export the app
export default app;


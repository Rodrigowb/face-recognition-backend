// Import mongoose and chalk
import mongoose from "mongoose"
import chalk from "chalk"

// Set the URI to production/development
const MONGO_URI = process.env.DB_URL || "mongodb://127.0.0.1:27017/faceapi";

// Set to return the updated db when receives a request
mongoose.set("returnOriginal", false);

// Connect to mongoose
mongoose
  .connect(MONGO_URI)
  .catch((error) => {
    console.log("Error on connecting to the database " + error.message)
  })

// Event listener for the database connection
mongoose.connection.on("connected", () => {
  console.log(chalk.green(`Connected to the database ${MONGO_URI}`))
})
mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected to the database"))
})
mongoose.connection.on("error", (error) => {
  console.log(chalk.red(`Mongodb connection error ${error}`))
})

// Export the connection
export default mongoose.connection
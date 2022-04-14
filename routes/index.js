// Import the routers
import { Router } from "express";
import expressionsRoute from './expressions.js'
import usersRoute from './users.js'

// Create a new router
const router = Router();

// Set the default route
router.get('/', (request, response) => response.send("Face recognition API root!"))

// Set the middlewares to be used
router.use("/", expressionsRoute)
router.use("/", usersRoute)

// Export router
export default router;
// Import router and controller
import { Router } from "express"
import { dataController as controller } from '../controllers/users.js'

// Create a new router
const router = Router()

// Create the middlewares routers
// POST
router.post('/users', controller.create);
// GET
router.get('/users', controller.getAll);
router.get('/users/email/:email', controller.getByEmail);
router.get('/users/firstname/:firstname', controller.getByFirstName);
router.get('/users/lastname/:lastname', controller.getByLastName);
router.get('/users/password/:password', controller.getByPassword);
// PUT
router.put('/users/email/:email', controller.updateByEmail);
// DELETE
router.get('/users/email/:email', controller.deleteByEmail);
router.get('/users/password/:password', controller.deleteByPassword);

// Export router
export default router
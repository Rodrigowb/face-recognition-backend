// Import router and controller
import { Router } from "express"
import dataController from '../controllers/users.js'

// Create a new router
const router = Router()

// Create the middlewares routers
// POST
router.post('/users', dataController.create);
// GET
router.get('/users', dataController.getAll);
router.get('/users/email/:email', dataController.getByEmail);
router.get('/users/firstname/:firstname', dataController.getByFirstName);
router.get('/users/lastname/:lastname', dataController.getByLastName);
router.get('/users/password/:password', dataController.getByPassword);
// PUT
router.put('/users/email/:email', dataController.updateByEmail);
// DELETE
router.get('/users/email/:email', dataController.deleteByEmail);
router.get('/users/password/:password', dataController.deleteByPassword);

// Export router
export default router
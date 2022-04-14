// Import router and controllers
import { Router } from "express";
import expressionsController from '../controllers/expressions.js'

// Create a new router
const router = Router()

// Create the middlewares routers
// POST
router.post('/expressions', expressionsController.create);
// GET
router.get('/expressions', expressionsController.getAll);
router.get('/expressions/datetime/:datetime', expressionsController.getByDatetime);
router.get('/expressions/emotion/:emotion', expressionsController.getByEmotion);
router.get('/expressions/email/:email', expressionsController.getByEmail);
// PUT
router.put('/expressions/email/:email', expressionsController.updateByEmail);
// DELETE
router.delete('/expressions/datetime/:datetime', expressionsController.deleteByDatetime);
router.delete('/expressions/email/:email', expressionsController.deleteByEmail);

// Export controller
export default router;
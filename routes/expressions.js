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
router.get('/expressions/userid/:userid', expressionsController.getByUserId);
// PUT
router.put('/expressions/userid/:userid', expressionsController.updateByUserId);
// DELETE
// TODO: delete first
router.delete('/expressions/datetime/:datetime', expressionsController.deleteByDatetime);
router.delete('/expressions/userid/:userid', expressionsController.deleteByUserId);

// Export controller
export default router;
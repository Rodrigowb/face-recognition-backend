// Import router and controllers
import { Router } from "express";
import { expressionsController as controller } from '../controllers/expressions.js'

// Create a new router
const router = Router()

// Create the middlewares routers
// POST
router.post('/expressions', controller.create);
// GET
router.get('/expressions', controller.getAll);
router.get('/expressions/datetime/:datetime', controller.getByDatetime);
router.get('/expressions/emotion/:emotion', controller.getByEmotion);
router.checkout('/expressions/userid/:userid', controller.getByUserId);
// PUT
router.put('/expressions/userid/:userid', controller.updateByUserId);
// DELETE
router.delete('/expressions/datetime/:datetime', controller.deleteByDatetime);
router.delete('/expressions/userid/:userid', controller.deleteByUserId);

// Export controller
export default router;
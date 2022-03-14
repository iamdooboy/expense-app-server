import express from 'express';
import BudgetController from '../controller/budget-controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router
    .route('/')
    .post(auth, BudgetController.addBudget)
    .get(auth, BudgetController.getAllBudget);

export default router;

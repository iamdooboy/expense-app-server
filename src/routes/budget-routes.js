import express from 'express';
import BudgetController from '../controller/budget-controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router
    .route('/')
    .post(auth, BudgetController.addBudget)
    .get(auth, BudgetController.getAllBudget);

router
    .route('/:id')
    .get(auth, BudgetController.getOneBudget)
    .delete(auth, BudgetController.deleteBudget);

router.route('/title/:id/').put(auth, BudgetController.updateBudgetTitle);
router.route('/amount/:id/').put(auth, BudgetController.updateBudgetAmount);

export default router;

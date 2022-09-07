import express from 'express';
import BudgetController from '../src/controller/budget-controller.js';
import auth from '../src/middleware/auth.js';

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
router.route('/edit/:id').put(auth, BudgetController.updateBudgetEdit);

export default router;

import express from 'express';
import auth from '../middleware/auth.js';
import TransactionController from '../controller/transaction-controller.js';

const router = express.Router();

router
    .route('/')
    .post(auth, TransactionController.addTransaction)
    .get(auth, TransactionController.getAllTransactions);

router
    .route('/:id')
    .delete(auth, TransactionController.deleteOneTransaction)
    .put(auth, TransactionController.updateTransaction);

export default router;

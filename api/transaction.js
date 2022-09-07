import express from 'express';
import auth from '../src/middleware/auth.js';
import TransactionController from '../src/controller/transaction-controller.js';

const router = express.Router();

router
    .route('/')
    .post(auth, TransactionController.addTransaction)
    .get(auth, TransactionController.getAllTransactions);

router
    .route('/:id')
    .delete(auth, TransactionController.deleteOneTransaction)
    .put(auth, TransactionController.updateTransaction);

router
    .route('/edit/:id')
    .put(auth, TransactionController.updateTransactionEdit);

export default router;

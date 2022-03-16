import Transaction from '../models/Transaction.js';
import asyncHandler from 'express-async-handler';

export default class TransactionController {
    //GET - get all transactions from a budget
    static getAllTransactions = async (req, res, next) => {
        try {
            const { budget } = req?.query;
            const income = await Transaction.find({
                user: req?.user,
                budget: budget,
            }).populate('user');
            res.json(income);
        } catch (error) {
            res.json(error);
        }
    };

    //POST - add a transaction
    static addTransaction = async (req, res, next) => {
        try {
            const { type, text, amount, createdAt, budget } = req?.body;
            const user = req.user;
            const transaction = await Transaction.create({
                type,
                text,
                amount,
                createdAt,
                budget,
                user,
            });

            res.json(transaction);
        } catch (error) {
            res.json(error);
        }
    };

    //DELETE - delete a transaction
    static deleteOneTransaction = asyncHandler(async (req, res, next) => {
        const { id } = req?.params;
        try {
            const trx = await Transaction.findByIdAndDelete(id);
            res.json(trx);
        } catch (error) {
            res.json(error);
        }
    });

    //UPDATE - update a transaction
    static updateTransaction = asyncHandler(async (req, res, next) => {
        const { id } = req?.params;

        try {
            const updated = await Transaction.findByIdAndUpdate(
                id,
                {
                    type,
                    text,
                    amount,
                    createdAt,
                    budget,
                    user,
                },
                {
                    new: true,
                }
            );
            res.json(updated);
        } catch (error) {
            res.json(error);
        }
    });
}

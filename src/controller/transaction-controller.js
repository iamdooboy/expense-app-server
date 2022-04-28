import Transaction from '../models/Transaction.js';
import asyncHandler from 'express-async-handler';

export default class TransactionController {
    //GET - get all transactions from a budget
    static getAllTransactions = async (req, res, next) => {
        try {
            //const { budget } = req?.params;
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
            const { type, text, amount, createdAt, budget, edit } = req?.body;
            const user = req.user;
            const transaction = await Transaction.create({
                type,
                text,
                amount,
                createdAt,
                budget,
                user,
                edit,
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
        const user = req.user;
        const { type, text, amount, createdAt, budget, edit } = req?.body;
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
                    edit,
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

    //PUT - update a budget edit
    static updateTransactionEdit = asyncHandler(async (req, res, next) => {
        const { id } = req?.params;

        const { edit } = req?.body;

        try {
            const transaction = await Transaction.findByIdAndUpdate(
                id,
                {
                    edit,
                },
                {
                    new: true,
                }
            );

            res.json(transaction);
        } catch (error) {
            res.json(error);
        }
    });
}

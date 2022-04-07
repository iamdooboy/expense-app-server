import Budget from '../models/Budget.js';
import asyncHandler from 'express-async-handler';

export default class BudgetController {
    //POST - create budget
    static addBudget = asyncHandler(async (req, res, next) => {
        try {
            const { title } = req?.body;
            const user = req?.user;
            const budget = await Budget.create({ title, user });
            // return res.status(201).json({
            //     success: true,
            //     data: budget,
            // });
            res.json(budget);
        } catch (error) {
            res.json(error);
        }
    });

    //GET - get all budget from a user
    static getAllBudget = asyncHandler(async (req, res, next) => {
        const { page } = req?.query;
        try {
            // const budget = await Budget.find({ user: req?.user }).populate(
            //     'user'
            // );
            const budget = await Budget.paginate(
                { user: req?.user },
                { limit: 20, page: Number(page), populate: 'user' }
            );
            res.json(budget);
        } catch (error) {
            res.json(error);
        }
    });

    //GET - get a budget from a user
    static getOneBudget = asyncHandler(async (req, res, next) => {
        const { id } = req?.params;
        try {
            const budget = await Budget.findById(id);
            res.json(budget);
        } catch (error) {
            res.json(error);
        }
    });

    //DELETE - delete a budget
    static deleteBudget = asyncHandler(async (req, res, next) => {
        const { id } = req?.params;

        try {
            const budget = await Budget.findByIdAndDelete(id);
            res.json(budget);
        } catch (error) {
            res.json(error);
        }
    });

    //PUT - update a budget
    static updateBudget = asyncHandler(async (req, res, next) => {
        const { id } = req?.params;

        const { title } = req?.body;

        try {
            const budget = await Budget.findByIdAndUpdate(
                id,
                {
                    title,
                },
                {
                    new: true,
                }
            );

            res.json(budget);
        } catch (error) {
            res.json(error);
        }
    });
}

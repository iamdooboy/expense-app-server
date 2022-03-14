import Budget from '../models/Budget.js';

export default class BudgetController {
    //POST - create budget
    static addBudget = async (req, res, next) => {
        try {
            const { title } = req?.body;
            const user = req?.user;
            const budget = await Budget.create({ title, user });
            return res.status(201).json({
                success: true,
                data: budget,
            });
        } catch (error) {
            res.json(error);
        }
    };

    //GET - get all budget from a user
    static getAllBudget = async (req, res, next) => {
        try {
            const budget = await Budget.find({ user: req?.user });
            res.json(budget);
        } catch (error) {
            res.json(error);
        }
    };
}

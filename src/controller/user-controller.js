import User from '../models/User.js';
import asyncHandler from 'express-async-handler';

export default class UserController {
    //GET ALL USERS
    static getAllUsers = asyncHandler(async (req, res, next) => {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (error) {
            res.json(error);
        }
    });

    //POST
    static addUsers = asyncHandler(async (req, res, next) => {
        const { email, password } = req.body;

        const userExists = await User.findOne({
            email,
        });

        if (userExists) {
            throw new Error('User already exists');
        }

        try {
            const user = await User.create({ email, password });

            res.status(200).json(user);
        } catch (error) {
            res.json(error);
        }
    });
}

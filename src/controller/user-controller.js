import User from '../models/User.js';
import asyncHandler from 'express-async-handler';
import { generateToken } from '../middleware/generateToken.js';

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

    //POST - register user
    static addUsers = asyncHandler(async (req, res, next) => {
        const { email, password } = req?.body;

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

    static loginUser = asyncHandler(async (req, res, next) => {
        const { email, password } = req?.body;

        const userFound = await User.findOne({ email });

        if (userFound && (await userFound.isPasswordMatch(password))) {
            res.json({
                _id: userFound?._id,
                email: userFound?.email,
                token: generateToken(userFound?._id),
            });
        } else {
            const errorMsg =
                'There was a problem logging in. Check your email and password or create an account.';
            //401 - Unauthorized
            res.status(401);
            throw new Error(errorMsg);
        }
    });
}

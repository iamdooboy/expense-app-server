import User from '../models/User.js';

export default class UserController {
    //GET ALL USER_SCHEM
    static getAllUsers = async (req, res, next) => {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (error) {
            res.json(error);
        }
    };

    //POST
    static addUsers = async (req, res, next) => {
        const { email, password } = req.body;

        try {
            const user = await User.create({ email, password });

            res.status(200).json(user);
        } catch (error) {
            res.json(error);
        }
    };
}

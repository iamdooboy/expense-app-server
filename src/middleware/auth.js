import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import asyncHandler from 'express-async-handler';

const auth = asyncHandler(async (req, res, next) => {
    //get token from headers
    let token;

    if (req.headers?.authorization?.startsWith('Bearer')) {
        token = req?.headers?.authorization?.split(' ')[1];

        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_KEY);
                const user = await User.findById(decoded.id);
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error('Not Authorized');
        }
    } else {
        throw new Error('No token attached');
    }
});

export default auth;

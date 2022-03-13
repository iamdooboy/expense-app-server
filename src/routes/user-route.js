import express from 'express';
import UserController from '../controller/user-controller.js';

const router = express.Router();

//get user
router.route('/').get(UserController.getAllUsers);

//register user
router.route('/register').post(UserController.addUsers);

//login user
router.route('/login').post(UserController.loginUser);

export default router;

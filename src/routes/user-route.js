import express from 'express';
import UserController from '../controller/user-controller.js';

const router = express.Router();

router.route('/').get(UserController.getAllUsers);
router.route('/register').post(UserController.addUsers);

export default router;

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user-route.js';
import budgetRoutes from './routes/budget-routes.js';
import transactionRoutes from './routes/transaction-routes.js';
import { connectDB } from './config/connectDB.js';
import { errorHandler } from './middleware/error.js';

const app = express();

//env
dotenv.config();

connectDB();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', userRoutes);
app.use('/api/budgets', budgetRoutes);
app.use('/api/transactions', transactionRoutes);

//error handling
app.use(errorHandler);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

export default app;

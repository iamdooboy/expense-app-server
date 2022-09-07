import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import user from './api/user.js';
import budget from './api/budget.js';
import transaction from './api/transaction.js';
import { errorHandler } from './src/middleware/error.js';

const connectDB = async () => {
    try {
        const response = await mongoose.connect(process.env.DB_URI);
        console.log(`MongoDB connected: ${response.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

const app = express();

//env
dotenv.config();

//connect to db
connectDB();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', user);
app.use('/api/budgets', budget);
app.use('/api/transactions', transaction);

//error handling
app.use(errorHandler);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user-route.js';
import { connectDB } from './config/connectDB.js';

const app = express();

//env
dotenv.config();

connectDB();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', userRoutes);

export default app;

import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';

const app = express();

//env
dotenv.config();

connectDB();

export default app;

import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const response = await mongoose.connect(process.env.DB_URI);
        console.log(`MongoDB connected: ${response.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

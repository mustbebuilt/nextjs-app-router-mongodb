import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

interface Connection {
    isConnected: boolean;
}

const connection: Connection = { isConnected: false };

export const connectDB = async () => {
    try {
        if (connection.isConnected) {
            console.log('Already connected');
            return;
        }
        const db = await mongoose.connect(process.env.MONGODB_URI!);
        connection.isConnected = db.connections[0].readyState === 1;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
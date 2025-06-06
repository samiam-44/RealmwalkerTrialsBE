import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionStr = process.env.MONGODB_URI || '';

async function connectDB() {
    try {
        await mongoose.connect(connectionStr)
        console.log(`MongoDB Connected...`);

    } catch (err) {
        console.error(err);
    }
};

export default connectDB

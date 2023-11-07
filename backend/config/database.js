const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')
const MONGO_URI = process.env.MONGO_URI || 5000;

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = mongoose.connection;

        db.on('error', (error) => {
            console.error('MongoDB connection error:', error);
        });

        db.once('open', () => {
            console.log('Connected to MongoDB');
        });
    } catch (error) {
        console.log("Database connection couldnot be established")
    }

}

module.exports = connectDatabase 
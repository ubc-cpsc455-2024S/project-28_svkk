const mongoose = require('mongoose');
require('dotenv').config();

// string to db
const uri = process.env.DB_URI;

const connectDB = async () => {
    try {
        console.log('mongodb uri is', uri);
        await mongoose.connect(uri, {
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

const mongoose = require('mongoose');
require('dotenv').config();

// string to db
const uri = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
        });

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

const mongoose = require('mongoose');

// string to db
const uri = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.y8liyvy.mongodb.net/project?retryWrites=true&w=majority&appName=Sandbox'

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

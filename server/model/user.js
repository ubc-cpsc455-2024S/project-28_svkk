const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: function() {
            return !this.isGoogleUser;
        },
    },
    isGoogleUser: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Users', UserSchema);

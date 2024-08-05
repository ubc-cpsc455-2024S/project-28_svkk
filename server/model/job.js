const mongoose = require('mongoose');
const dayjs = require('dayjs');

const JobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
    },
    location: {
        type: String,
    },
    dateApplied: {
        type: Date,
        required: true,
    },
    duration: {
        type: String
    },
    link: {
        type: String
    },

    status: {
        type: String
    },
    coverLetterUsed: {
        type: String
    },
    tailoredCoverLetterUsed: {
        type: String
    },
    userEmail: {
        type: String,
        required: true,
    },
    tags: {
        type: Array
    }
});

module.exports = mongoose.model('Job', JobSchema);

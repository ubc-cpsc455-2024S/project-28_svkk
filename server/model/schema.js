const mongoose = require("mongoose");
const { Schema } = mongoose;

const resumeSchema = new mongoose.Schema({
    email: String,
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    content: String
});

const coverLetterSchema = new mongoose.Schema({
    email: String,
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    content: String
});

const jobPostingSchema = new mongoose.Schema({
    email: String,
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    content: String
});

const tailoredCoverLetterSchema = new mongoose.Schema({
    email: String,
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    content: String
});

module.exports = {
    resumeSchema,
    coverLetterSchema,
    jobPostingSchema,
    tailoredCoverLetterSchema
};

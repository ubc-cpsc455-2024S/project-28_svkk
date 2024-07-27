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

// Define and export the models
const Resume = mongoose.model("Resume", resumeSchema, "resumes");
const CoverLetter = mongoose.model("CoverLetter", coverLetterSchema, "coverLetters");
const JobPosting = mongoose.model("JobPosting", jobPostingSchema, "jobPostings");
const TailoredCoverLetter = mongoose.model("TailoredCoverLetter", tailoredCoverLetterSchema, "tailoredCoverLetters");

module.exports = {
    Resume,
    CoverLetter,
    JobPosting,
    TailoredCoverLetter
};

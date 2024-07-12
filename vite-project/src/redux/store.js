import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from './jobs/jobsReducer';
import jobPostingReducer from "./jobPostings/jobPostingsReducer";
import coverLetterReducer from "./coverLetters/coverLetterReducer";
import tailoredCoverLetterReducer from "./tailoredCoverLetters/tailoredCoverLetterReducer.js";
import resumeReducer from "./resumes/resumeReducer.js";
import UserEmailReducer from "./userEmail/UserEmailReducer.js";

export default configureStore({
    reducer: {
        jobList: jobsReducer,
        jobPostingList: jobPostingReducer,
        coverLetterList: coverLetterReducer,
        tailoredCoverLetterList: tailoredCoverLetterReducer,
        resumeList: resumeReducer,
        userEmail: UserEmailReducer
    },
    devTools: true
})
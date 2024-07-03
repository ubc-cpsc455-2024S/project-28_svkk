import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from './jobs/jobsReducer';
import jobPostingReducer from "./jobPostings/jobPostingsReducer";
import coverLetterReducer from "./coverLetters/coverLetterReducer";
import tailoredCoverLetterReducer from "./tailoredCoverLetters/coverLetterReducer";

export default configureStore({
    reducer: {
        jobList: jobsReducer,
        jobPostingList: jobPostingReducer,
        coverLetterList: coverLetterReducer,
        tailoredCoverLetterList: tailoredCoverLetterReducer
    },
    devTools: true
})
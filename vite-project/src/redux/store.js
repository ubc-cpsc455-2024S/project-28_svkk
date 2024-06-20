import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from './jobs/jobsReducer';

export default configureStore({
    reducer: {
        jobList: jobsReducer
    },
    devTools: true
})
import { configureStore } from "@reduxjs/toolkit";
import jobListReducer from './jobs/jobListSlice';

export default configureStore({
    reducer: {
        jobList: jobListReducer
    }
})
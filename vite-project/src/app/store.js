import { configureStore } from "@reduxjs/toolkit";
import jobListReducer from '../features/jobListSlice';

export default configureStore({
    reducer: {
        jobList: jobListReducer
    }
})
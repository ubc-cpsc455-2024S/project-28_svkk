import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from './jobs/jobsReducer';
import usersReducer from "./users/usersReducer.js";

export default configureStore({
    reducer: {
        jobList: jobsReducer,
        userList: usersReducer
    },
    devTools: true
})
import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import { getJobsAsync } from "./thunks";


const INITIAL_STATE = {
    jobs: [],
    getJobs: REQUEST_STATE.IDLE,
    error: null
}

export const jobListSlice = createSlice({
    name: 'jobList',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getJobsAsync.pending, (state) => {
            state.getJobs = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(getJobsAsync.fulfilled, (state, action) => {
            state.getJobs = REQUEST_STATE.FULFILLED;
            state.jobs = action.payload;
        })
        .addCase(getJobsAsync.rejected, (state, action) => {
            state.getJobs = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
    }
})

export default jobListSlice.reducer
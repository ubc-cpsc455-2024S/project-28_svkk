import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import { addJobAsync, deleteJobAsync, getJobsAsync, updateJobAsync, searchJobsAsync } from "./thunks";


const INITIAL_STATE = {
    jobs: [],
    getJobs: REQUEST_STATE.IDLE,
    updateJob: REQUEST_STATE.IDLE,
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
        .addCase(updateJobAsync.pending, (state) => {
            state.updateJob = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(updateJobAsync.fulfilled, (state, action) => {
            state.updateJob = REQUEST_STATE.FULFILLED;
            const indexOfUpdatedJob = state.jobs.findIndex(j => j._id == action.payload.id);
            console.log('action.payload (updated job) is: ', action.payload);
            state.jobs[indexOfUpdatedJob] = action.payload;
        })
        .addCase(updateJobAsync.rejected, (state, action) => {
            state.updateJob = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
        .addCase(addJobAsync.fulfilled, (state, action) => {
            state.jobs.push(action.payload);
        })
        .addCase(deleteJobAsync.fulfilled, (state, action) => {
            state.jobs = action.payload;
        })
        .addCase(searchJobsAsync.fulfilled, (state, action) => {
            state.jobs = action.payload;
        })
    }
})

export default jobListSlice.reducer
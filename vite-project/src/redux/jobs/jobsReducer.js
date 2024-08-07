import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import { addJobAsync, deleteJobAsync, getJobsAsync, getJobByIdAsync, updateJobAsync, searchJobsAsync, getJobsDateAppliedEarliestToLatestAsync, getJobsDateAppliedLatestToEarliestAsync, filterTagsAsync } from "./thunks";
import { act } from "react";


const INITIAL_STATE = {
    jobs: [],
    getJobs: REQUEST_STATE.IDLE,
    getJobById: REQUEST_STATE.IDLE,
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
        .addCase(getJobByIdAsync.fulfilled, (state, action) => {
            state.getJobById = REQUEST_STATE.FULFILLED;
            state.jobs = state.jobs.concat(action.payload);
        })
        .addCase(getJobsDateAppliedEarliestToLatestAsync.fulfilled, (state, action) => {
            state.jobs = action.payload;
        })
        .addCase(getJobsDateAppliedLatestToEarliestAsync.fulfilled, (state, action) => {
            state.jobs = action.payload;
        })
        .addCase(updateJobAsync.pending, (state) => {
            state.updateJob = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(updateJobAsync.fulfilled, (state, action) => {
            state.updateJob = REQUEST_STATE.FULFILLED;
            // console.log('id of job to update is: ', action.payload.id);
            const indexOfUpdatedJob = state.jobs.findIndex(j => j._id == action.payload._id);
            // console.log('action.payload (updated job) is: ', action.payload);
            state.jobs[indexOfUpdatedJob] = action.payload;
        })
        .addCase(updateJobAsync.rejected, (state, action) => {
            state.updateJob = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
        .addCase(addJobAsync.fulfilled, (state, action) => {
            // console.log('new job added! ', action.payload);
            // state.jobs.push(action.payload);
            console.log('new job list (reducer): ', action.payload);
            state.jobs = action.payload;
        })
        .addCase(deleteJobAsync.fulfilled, (state, action) => {
            state.jobs = action.payload;
        })
        .addCase(searchJobsAsync.fulfilled, (state, action) => {
            state.jobs = action.payload;
        })
        .addCase(filterTagsAsync.fulfilled, (state, action) => {
            state.jobs = action.payload;
        })
    }
})

export const {filterTag} = jobListSlice.actions

export default jobListSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import { addJobPostingAsync, getJobPostingsAsync, deleteJobPostingAsync } from "./thunk";

const INITIAL_STATE = {
    jobPostings: [],
    getJobPostings: REQUEST_STATE.IDLE,
    addJobPosting: REQUEST_STATE.IDLE,
    deleteJobPosting: REQUEST_STATE.IDLE,
    error: null
}

export const jobPostingsSlice = createSlice({
    name: 'jobPostingList',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getJobPostingsAsync.pending, (state) => {
            state.getJobPostings = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(getJobPostingsAsync.fulfilled, (state, action) => {
            state.getJobPostings = REQUEST_STATE.FULFILLED;
            state.jobPostings = action.payload;
        })
        .addCase(getJobPostingsAsync.rejected, (state, action) => {
            state.getJobPostings = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
        .addCase(addJobPostingAsync.pending, (state) => {
            state.addJobPosting = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(addJobPostingAsync.fulfilled, (state, action) => {
            state.addJobPosting = REQUEST_STATE.FULFILLED;
            state.jobPostings.push(action.payload);
        })
        .addCase(addJobPostingAsync.rejected, (state, action) => {
            state.addJobPosting = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
        .addCase(deleteJobPostingAsync.pending, (state) => {
            state.deleteJobPosting = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(deleteJobPostingAsync.fulfilled, (state, action) => {
            state.deleteJobPosting = REQUEST_STATE.FULFILLED;
            state.jobPostings = state.jobPostings.filter(jobPosting => jobPosting.name !== action.payload.name);
        })
        .addCase(deleteJobPostingAsync.rejected, (state, action) => {
            state.deleteJobPosting = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })

    }
})

export default jobPostingsSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import {addResumeAsync, deleteResumesAsync, getResumesAsync} from "./thunk.js";


const INITIAL_STATE = {
    resumes: [],
    getResumes: REQUEST_STATE.IDLE,
    deleteResume: REQUEST_STATE.IDLE,
    addResume: REQUEST_STATE.IDLE,
    error: null
}

export const resumeSlice = createSlice( {
    name: 'resumeList',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getResumesAsync.pending, (state) => {
                state.getResumes= REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getResumesAsync.fulfilled, (state, action) => {
                state.getResumes = REQUEST_STATE.FULFILLED;
                state.resumes = action.payload
            })
            .addCase(getResumesAsync.rejected, (state,action) => {
                state.getResumes = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(deleteResumesAsync.pending, (state) => {
                state.deleteResume = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteResumesAsync.fulfilled, (state, action) => {
                state.deleteResume = REQUEST_STATE.FULFILLED;
                state.resumes = state.resumes.filter(c => c.name !== action.payload.name);
            })
            .addCase(deleteResumesAsync.rejected, (state,action) => {
                state.deleteResume = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(addResumeAsync.pending, (state) => {
                state.addResume = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addResumeAsync.fulfilled, (state, action) => {
                state.addResume = REQUEST_STATE.FULFILLED;
                state.resumes.push(action.payload);
            })
            .addCase(addResumeAsync.rejected, (state,action) => {
                state.addResume = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })

    }
})

export default resumeSlice.reducer;
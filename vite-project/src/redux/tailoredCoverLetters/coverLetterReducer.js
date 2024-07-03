import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import {addTailoredCoverLettersAsync, deleteTailoredCoverLetterAsync, getTailoredCoverLettersAsync} from "./thunk.js";

const INITIAL_STATE = {
    tailoredCoverLetters: [],
    getTailoredCoverLetters: REQUEST_STATE.IDLE,
    deleteTailoredCoverLetter: REQUEST_STATE.IDLE,
    error: null
}

export const tailoredCoverLetterSlice = createSlice( {
    name: 'tailoredCoverLetterList',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getTailoredCoverLettersAsync.pending, (state) => {
            state.getTailoredCoverLetters = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(getTailoredCoverLettersAsync.fulfilled, (state,action) => {
            state.getTailoredCoverLetters = REQUEST_STATE.FULFILLED;
            state.error = null;
            state.tailoredCoverLetters = action.payload;
        })
        .addCase(getTailoredCoverLettersAsync.rejected, (state,action) => {
            state.error = action.error;
            state.getTailoredCoverLetters = REQUEST_STATE.REJECTED;
        })
        .addCase(deleteTailoredCoverLetterAsync.pending, (state) => {
            state.deleteTailoredCoverLetter = REQUEST_STATE.PENDING;
        })
        .addCase(deleteTailoredCoverLetterAsync.fulfilled, (state, action) => {
            state.deleteTailoredCoverLetter = REQUEST_STATE.FULFILLED;
            state.tailoredCoverLetters = state.tailoredCoverLetters.filter(c => c.name !== action.payload.name);
        })
        .addCase(deleteTailoredCoverLetterAsync.rejected, (state,action) => {
            state.error = action.error;
            state.deleteTailoredCoverLetter = REQUEST_STATE.REJECTED;
        })
        .addCase(addTailoredCoverLettersAsync.pending, (state) => {
            state.deleteTailoredCoverLetter = REQUEST_STATE.PENDING;
        })
        .addCase(addTailoredCoverLettersAsync.fulfilled, (state, action) => {
            state.deleteTailoredCoverLetter = REQUEST_STATE.FULFILLED;
            state.tailoredCoverLetters.push(action.payload)
        })
        .addCase(addTailoredCoverLettersAsync.rejected, (state,action) => {
            state.error = action.error;
            state.deleteTailoredCoverLetter = REQUEST_STATE.REJECTED;
        })
}
})

export default tailoredCoverLetterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import { getCoverLetterTemplatesAsync, getCoverLettersAsync, addCoverLetterAsync, deleteCoverLetterAsync } from "./thunk";
import {tailoredCoverLetterSlice} from "../tailoredCoverLetters/tailoredCoverLetterReducer.js";

const INITIAL_STATE = {
    coverLetters: [],
    coverLetterTemplates: [],
    getCoverLetterTemplates: REQUEST_STATE.IDLE,
    getCoverLetters: REQUEST_STATE.IDLE,
    addCoverLetter: REQUEST_STATE.IDLE,
    deleteCoverLetter: REQUEST_STATE.IDLE,
    error: null
}

export const coverLettersSlice = createSlice({
    name: 'coverLetterList',
    initialState: INITIAL_STATE,
    reducers: {
        setCoverLetters: function(state, action) {
            state.coverLetters = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCoverLetterTemplatesAsync.pending, (state) => {
            state.getCoverLetterTemplates = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(getCoverLetterTemplatesAsync.fulfilled, (state, action) => {
            state.getCoverLetterTemplates = REQUEST_STATE.FULFILLED;
            state.coverLetterTemplates = action.payload;
        })
        .addCase(getCoverLetterTemplatesAsync.rejected, (state, action) => {
            state.getCoverLetterTemplates = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
        .addCase(getCoverLettersAsync.pending, (state) => {
            state.getCoverLetters = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(getCoverLettersAsync.fulfilled, (state, action) => {
            state.getCoverLetters = REQUEST_STATE.FULFILLED;
            state.coverLetters = action.payload;
        })
        .addCase(getCoverLettersAsync.rejected, (state, action) => {
            state.getCoverLetters = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
        .addCase(addCoverLetterAsync.pending, (state) => {
            state.addCoverLetter = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(addCoverLetterAsync.fulfilled, (state, action) => {
            state.addCoverLetter = REQUEST_STATE.FULFILLED;
            state.coverLetters.push(action.payload);
        })
        .addCase(addCoverLetterAsync.rejected, (state, action) => {
            state.addCoverLetter = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
        .addCase(deleteCoverLetterAsync.pending, (state) => {
            state.deleteCoverLetter = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(deleteCoverLetterAsync.fulfilled, (state, action) => {
            state.deleteCoverLetter = REQUEST_STATE.FULFILLED;
            console.log("action payload name");
            console.log(action.payload);
            console.log(action.payload.name);
            state.coverLetters = state.coverLetters.filter(c => c.name !== action.payload.name);
        })
        .addCase(deleteCoverLetterAsync.rejected, (state, action) => {
            state.deleteCoverLetter = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
    }
})
export const { setCoverLetters } = coverLettersSlice.actions;
export default coverLettersSlice.reducer
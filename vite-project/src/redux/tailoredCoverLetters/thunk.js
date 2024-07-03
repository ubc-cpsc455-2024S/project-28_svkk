import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import coverLetterService from "./service";

export const getTailoredCoverLettersAsync = createAsyncThunk(
    actionTypes.GET_TAILORED_COVER_LETTERS,
    async() => {
        console.log("waiting on request to get cover letters");
        return await coverLetterService.getTailoredCoverLetters();
    }
)


export const deleteTailoredCoverLetterAsync = createAsyncThunk(
    actionTypes.DELETE_TAILORED_COVER_LETTER,
    async(name) => {
        console.log("deleteCoverLetterAsync");
        await coverLetterService.deleteTailoredCoverLetter(name);
        return { name }
    }
)


export const addTailoredCoverLettersAsync = createAsyncThunk (
    actionTypes.ADD_TAILORED_COVER_LETTER,
    async (coverLetter) => {
        console.log("addCoverLetterAsync");
        await coverLetterService.addTailoredCoverLetter(coverLetter)
    }
)
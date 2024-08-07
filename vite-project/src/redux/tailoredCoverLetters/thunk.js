import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import coverLetterService from "./service";

export const getTailoredCoverLettersAsync = createAsyncThunk(
    actionTypes.GET_TAILORED_COVER_LETTERS,
    async({email}) => {
        return await coverLetterService.getTailoredCoverLetters({email});
    }
)
export const addTailoredCoverLettersAsync = createAsyncThunk (
    actionTypes.ADD_TAILORED_COVER_LETTER,
    async ({email,coverLetter}) => {
        return await coverLetterService.addTailoredCoverLetter({email,coverLetter})
    }
)

export const deleteTailoredCoverLetterAsync = createAsyncThunk(
    actionTypes.DELETE_TAILORED_COVER_LETTER,
    async({email, name}) => {
        return await coverLetterService.deleteTailoredCoverLetter({email,name});
    }
)
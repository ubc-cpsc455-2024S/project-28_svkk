import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import coverLetterService from "./service";

export const getCoverLetterTemplatesAsync = createAsyncThunk(
    actionTypes.GET_TEMPLATES,
    async() => {
        // console.log("waiting on reqest to get cover letter templates");
        return await coverLetterService.getCoverLetterTemplates();
    }
)

export const getCoverLettersAsync = createAsyncThunk(
    actionTypes.GET_COVER_LETTERS,
    async() => {
        // console.log("waiting on reqest to get cover letters");
        return await coverLetterService.getCoverLetters();
    }
)

export const addCoverLetterAsync = createAsyncThunk(
    actionTypes.ADD_COVER_LETTER,
    async(coverLetter) => {
        // console.log("addCoverLetterAsync");
        return await coverLetterService.addCoverLetter(coverLetter);
    }
)

export const deleteCoverLetterAsync = createAsyncThunk(
    actionTypes.DELETE_COVER_LETTER,
    async(name) => {
        console.log("deleteCoverLetterAsync");
        await coverLetterService.deleteCoverLetter(name);
        return { name }
    }
)

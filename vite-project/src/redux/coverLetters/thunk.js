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
    async({email}) => {
        // console.log("waiting on reqest to get cover letters");
        return await coverLetterService.getCoverLetters({email});
    }
)

export const addCoverLetterAsync = createAsyncThunk(
    actionTypes.ADD_COVER_LETTER,
    async({email,coverLetter}) => {
        console.log("addCoverLetterAsync");
        // console.log(coverLetter);
        // console.log(email);
        return await coverLetterService.addCoverLetter({email,coverLetter});
    }
)

export const deleteCoverLetterAsync = createAsyncThunk(
    actionTypes.DELETE_COVER_LETTER,
    async({email, name}) => {
        console.log("deleteCoverLetterAsync");
        return await coverLetterService.deleteCoverLetter({email, name});
    }
)

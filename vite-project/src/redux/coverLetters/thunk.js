import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import coverLetterService from "./service";

export const getCoverLetterTemplatesAsync = createAsyncThunk(
    actionTypes.GET_TEMPLATES,
    async() => {

        return await coverLetterService.getCoverLetterTemplates();
    }
)

export const getCoverLettersAsync = createAsyncThunk(
    actionTypes.GET_COVER_LETTERS,
    async({email}) => {

        return await coverLetterService.getCoverLetters({email});
    }
)

export const addCoverLetterAsync = createAsyncThunk(
    actionTypes.ADD_COVER_LETTER,
    async({email,coverLetter}) => {



        return await coverLetterService.addCoverLetter({email,coverLetter});
    }
)

export const deleteCoverLetterAsync = createAsyncThunk(
    actionTypes.DELETE_COVER_LETTER,
    async({email, name}) => {

        return await coverLetterService.deleteCoverLetter({email, name});
    }
)

import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import resumeService from "./service";

export const getResumesAsync = createAsyncThunk(
    actionTypes.GET_RESUME,
    async() => {
        console.log("waiting on request to get Resumes");
        return await resumeService.getResume();
    }
)


export const deleteResumesAsync = createAsyncThunk(
    actionTypes.DELETE_RESUME,
    async(name) => {
        console.log("deleteResumeAsync");
        await resumeService.deleteResume(name);
        return { name }
    }
)


export const addResumeAsync = createAsyncThunk (
    actionTypes.ADD_RESUME,
    async (resume) => {
        return await resumeService.addResume(resume)
    }
)
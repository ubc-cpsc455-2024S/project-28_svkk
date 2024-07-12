import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import resumeService from "./service";

export const getResumesAsync = createAsyncThunk(
    actionTypes.GET_RESUME,
    async({email}) => {
        console.log("waiting on request to get Resumes");
        return await resumeService.getResume({email});
    }
)

export const addResumeAsync = createAsyncThunk (
    actionTypes.ADD_RESUME,
    async ({email, resume}) => {
        return await resumeService.addResume({email,resume})
    }
)

export const deleteResumesAsync = createAsyncThunk(
    actionTypes.DELETE_RESUME,
    async({email, name}) => {
        console.log("deleteResumeAsync");
        return await resumeService.deleteResume({email,name});
    }
)

import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import resumeService from "./service";

export const getResumesAsync = createAsyncThunk(
    actionTypes.GET_RESUME,
    async({email}) => {

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

        return await resumeService.deleteResume({email,name});
    }
)

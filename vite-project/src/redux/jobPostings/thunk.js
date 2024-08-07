import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import JobPostingsService from './service';

export const getJobPostingsAsync = createAsyncThunk(
    actionTypes.GET_JOB_POSTINGS,
    async({email}) => {
        return await JobPostingsService.getJobPostings({email});
    }
)

export const addJobPostingAsync = createAsyncThunk(
    actionTypes.ADD_JOB_POSTING,
    async ({email, jobPosting}) => {
        return await JobPostingsService.addJobPosting({email, jobPosting});
    }
);

export const deleteJobPostingAsync = createAsyncThunk(
    actionTypes.DELETE_JOB_POSTING,
    async ({email, name} ) => {
        return await JobPostingsService.deleteJobPosting({email,name});
    }
)


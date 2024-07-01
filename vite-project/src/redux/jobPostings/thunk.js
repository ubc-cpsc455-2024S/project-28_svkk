import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import JobPostingsService from './service';

export const getJobPostingsAsync = createAsyncThunk(
    actionTypes.GET_JOB_POSTINGS,
    async() => {
        console.log('wating on response from job postings get request');
        return await JobPostingsService.getJobPostings();
    }
)

export const addJobPostingAsync = createAsyncThunk(
    actionTypes.ADD_JOB_POSTING,
    async ( jobPosting ) => {
        return await JobPostingsService.addJobPosting(jobPosting);
    }
)

export const deleteJobPostingAsync = createAsyncThunk(
    actionTypes.DELETE_JOB_POSTING,
    async ( name ) => {
        console.log(`waiting on request to delete job posting named "${name}"`);
        await JobPostingsService.deleteJobPosting(name);
        return { name };
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import JobsService from './service';

export const getJobsAsync = createAsyncThunk(
    actionTypes.GET_JOBS,
    async () => {
        // console.log('waiting on response from get request');
      return await JobsService.getJobs();
    }
);

export const updateJobAsync = createAsyncThunk(
    actionTypes.UPDATE_JOBS,
    async({id, fields}) => {
        return await JobsService.updateJob({id, fields});
    }
)

export const addJobAsync = createAsyncThunk(
    actionTypes.ADD_JOB,
    async({title, company, type, location, date, duration, link, cv}) => {
        return await JobsService.addJob({title, company, type, location, date, duration, link, cv});
    }
)

export const deleteJobAsync = createAsyncThunk(
    actionTypes.ADD_JOB,
    async({title, company, type, location, date, duration, link, cv}) => {
        return await JobsService.deleteJob({title, company, type, location, date, duration, link, cv});
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import JobsService from './service';

export const getJobsAsync = createAsyncThunk(
    actionTypes.GET_JOBS,
    async (userEmail) => {
        // console.log('waiting on response from get request, userEmail is: ', userEmail);
      return await JobsService.getJobs(userEmail);
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
    async({title, company, type, location, date, duration, link, cv, userEmail}) => {
        console.log("waiting for request from add job, user email: ", userEmail);
        return await JobsService.addJob({title, company, type, location, date, duration, link, cv, userEmail});
    }
)

export const deleteJobAsync = createAsyncThunk(
    actionTypes.DELETE_JOB,
    async(data) => {
        console.log(data)
        return await JobsService.deleteJob(data);
    }
)

export const searchJobsAsync = createAsyncThunk(
    actionTypes.SEARCH_JOBS,
    async(filter) => {
        return await JobsService.searchJobs(filter);
    }
)
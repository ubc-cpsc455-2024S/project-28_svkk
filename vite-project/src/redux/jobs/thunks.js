import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import JobsService from './service';

export const getJobsAsync = createAsyncThunk(
    actionTypes.GET_JOBS,
    async (userEmail) => {
      return await JobsService.getJobs(userEmail);
    }
);

export const getJobByIdAsync = createAsyncThunk(
    actionTypes.GET_JOB_BY_ID,
    async (id) => {
        return await JobsService.getJobById(id);
    }
);

export const getJobsDateAppliedEarliestToLatestAsync = createAsyncThunk(
    actionTypes.GET_JOBS_EL,
    async (userEmail) => {
      return await JobsService.getJobsDateAppliedEarliestToLatest(userEmail);
    }
);

export const getJobsDateAppliedLatestToEarliestAsync = createAsyncThunk(
    actionTypes.GET_JOBS_LE,
    async (userEmail) => {
      return await JobsService.getJobsDateAppliedLatestToEarliestAsync(userEmail);
    }
);

export const updateJobAsync = createAsyncThunk(
    actionTypes.UPDATE_JOBS,
    async({id, fields}) => {
        console.log(`waiting to update job with id ${id} with fields`, fields);
        return await JobsService.updateJob({id, fields});
    }
)

export const addJobAsync = createAsyncThunk(
    actionTypes.ADD_JOB,
    async({title, company, type, location, date, duration, link, status, cv, tcv, userEmail, tags}) => {
        console.log('dispatching add job async with fields: ', {title, company, type, location, date, duration, link, status, cv, tcv, userEmail, tags});
        return await JobsService.addJob({title, company, type, location, date, duration, link, status, cv, tcv, userEmail, tags});
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
    async(data) => {
        console.log('at search job async with these filters and email', data);
        return await JobsService.searchJobs(data);
    }
)

export const filterTagsAsync = createAsyncThunk(
    actionTypes.FILTER_TAG,
    async(data) => {
        console.log('at filterTagAsync:', data);
        return await JobsService.filterTags(data);
    }
)
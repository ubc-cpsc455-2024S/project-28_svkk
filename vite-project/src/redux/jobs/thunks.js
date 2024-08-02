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

export const getJobsDateAppliedEarliestToLatestAsync = createAsyncThunk(
    actionTypes.GET_JOBS_EL,
    async (userEmail) => {
        // console.log('waiting on response from get request, userEmail is: ', userEmail);
      return await JobsService.getJobsDateAppliedEarliestToLatest(userEmail);
    }
);

export const getJobsDateAppliedLatestToEarliestAsync = createAsyncThunk(
    actionTypes.GET_JOBS_LE,
    async (userEmail) => {
        // console.log('waiting on response from get request, userEmail is: ', userEmail);
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

// export const addJobAsync = createAsyncThunk(
//     actionTypes.ADD_JOB,
//     async({title, company, type, location, date, duration, link, cv, tcv, userEmail}) => {
//         console.log("addJobAsync called with:", { title, company, type, location, date, duration, link, cv, tcv, userEmail });
//         const response = await JobsService.addJob({ title, company, type, location, date, duration, link, cv, tcv, userEmail });
//         console.log("addJobAsync response:", response);

//     }
// )

export const addJobAsync = createAsyncThunk(
    actionTypes.ADD_JOB,
    async({title, company, type, location, date, duration, link, cv, tcv, userEmail, tags}) => {
        console.log('dispatching add job async with fields: ', {title, company, type, location, date, duration, link, cv, tcv, userEmail, tags});
        return await JobsService.addJob({title, company, type, location, date, duration, link, cv, tcv, userEmail, tags});
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
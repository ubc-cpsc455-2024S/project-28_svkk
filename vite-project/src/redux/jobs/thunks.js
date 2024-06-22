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

//
export const getUserAsync = createAsyncThunk(
    actionTypes.GET_USER,
    async () => {
        // console.log('waiting on response from get request');
        return await JobsService.getJobs();
    }
);

//

export const addUserAsync = createAsyncThunk(
    actionTypes.ADD_USER,
    async (groupMember) => {
        return await UserService.addUser(groupMember);
    }
);

export const modifyUserAsync = createAsyncThunk(
    actionTypes.MODIFY_USER,
    async (groupMember) => {
        return await UserService.modifyUser(groupMember);
    }
);


export const deleteUserAsync = createAsyncThunk(
    actionTypes.DELETE_USER,
    async (uuid) => {
        return await UserService.deleteUser(uuid);
    }
);
import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import UsersService from './service';

// ===== Users =====
export const getUserAsync = createAsyncThunk(
    actionTypes.GET_USER,
    async ({ uuid, token }) => {
        return await UsersService.getUser({ uuid, token });
    }
);

export const addUserAsync = createAsyncThunk(
    actionTypes.POST_USER,
    async ({ username, password, email, name }) => {
        return await UsersService.addUser({ username, password, email, name });
    }
);

export const patchUserAsync = createAsyncThunk(
    actionTypes.PATCH_USER,
    async ({ uuid, token, user }) => {
        return await UsersService.patchUser({ uuid, token, user });
    }
);

export const deleteUserAsync = createAsyncThunk(
    actionTypes.DELETE_USER,
    async ({ uuid, token, username, password }) => {
        return await UsersService.deleteUser({ uuid, token, username, password });
    }
);

export const loginUserAsync = createAsyncThunk(
    actionTypes.POST_LOGIN_USER,
    async (credentials) => {
        return await UsersService.loginUser(credentials);
    }
);

export const logoutUserAsync = createAsyncThunk(
    actionTypes.POST_LOGOUT_USER,
    async ({ uuid, token }) => {
        return await UsersService.logoutUser({ uuid, token });
    }
);

// ===== Resumes =====
export const addResumeAsync = createAsyncThunk(
    actionTypes.POST_RESUME,
    async ({ uuid,token, name, resumeString }) => {
        return await UsersService.addResume({ uuid, token, name, resumeString });
    }
);

export const patchResumeAsync = createAsyncThunk(
    actionTypes.PATCH_RESUME,
    async ({ uuid, token, resumeUUID, resumeString }) => {
        return await UsersService.patchResume({ uuid, token, resumeUUID, resumeString });
    }
);

export const deleteResumeAsync = createAsyncThunk(
    actionTypes.DELETE_RESUME,
    async ({ uuid, token, resumeUUID }) => {
        return await UsersService.deleteResume({ uuid, token, resumeUUID });
    }
);

// ===== Cover Letters =====
export const addCoverLetterAsync = createAsyncThunk(
    actionTypes.POST_COVER_LETTER,
    async ({ uuid, token, name, coverLetterString }) => {
        return await UsersService.addCoverLetter({ uuid, token, name, coverLetterString });
    }
);

export const patchCoverLetterAsync = createAsyncThunk(
    actionTypes.PATCH_COVER_LETTER,
    async ({ uuid, token, coverLetterUUID, coverLetterString }) => {
        return await UsersService.patchCoverLetter({ uuid, token, coverLetterUUID, coverLetterString });
    }
);
// console.log("coverLetterUUID from deleteCoverLetterAsync");
// console.log(coverLetterUUID);
export const deleteCoverLetterAsync = createAsyncThunk(
    actionTypes.DELETE_COVER_LETTER,
    async ({ uuid, token, coverLetterUUID }) => {

        return await UsersService.deleteCoverLetter({ uuid, token, coverLetterUUID });
    }
);

// ===== Job Postings =====
export const addJobPostingAsync = createAsyncThunk(
    actionTypes.POST_JOB_POSTING,
    async ({ uuid, token, name, jobPostingString }) => {
        return await UsersService.addJobPosting({ uuid, token, name, jobPostingString });
    }
);

export const patchJobPostingAsync = createAsyncThunk(
    actionTypes.PATCH_JOB_POSTING,
    async ({ uuid, token, jobPostingUUID, jobPostingString }) => {
        return await UsersService.patchJobPosting({ uuid, token, jobPostingUUID, jobPostingString });
    }
);

export const deleteJobPostingAsync = createAsyncThunk(
    actionTypes.DELETE_JOB_POSTING,
    async ({ uuid, token, jobPostingUUID }) => {
        return await UsersService.deleteJobPosting({ uuid, token, jobPostingUUID});
    }
);

// ===== Tailored Cover Letters =====
export const addTailoredCoverLetterAsync = createAsyncThunk(
    actionTypes.POST_TAILORED_COVER_LETTER,
    async ({ uuid, token, name, coverLetterString }) => {
        return await UsersService.addTailoredCoverLetter({ uuid, token, name, coverLetterString });
    }
);

export const patchTailoredCoverLetterAsync = createAsyncThunk(
    actionTypes.PATCH_TAILORED_COVER_LETTER,
    async ({ uuid, token, coverLetterUUID, coverLetterString }) => {
        return await UsersService.patchTailoredCoverLetter({ uuid, token, coverLetterUUID, coverLetterString });
    }
);

export const deleteTailoredCoverLetterAsync = createAsyncThunk(
    actionTypes.DELETE_TAILORED_COVER_LETTER,
    async ({ uuid, token, coverLetterUUID }) => {
        return await UsersService.deleteTailoredCoverLetter({ uuid, token, coverLetterUUID });
    }
);

// ===== Tailor Request =====
export const sendTailorRequestAsync = createAsyncThunk(
    actionTypes.SEND_TAILOR_REQUEST,
    async ({ uuid, token, coverLetterString }) => {
        return await UsersService.sendTailorRequest({ uuid, token, coverLetterString });
    }
);

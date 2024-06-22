import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import {
    getUserAsync,
    addUserAsync,
    patchUserAsync,
    deleteUserAsync,
    loginUserAsync,
    logoutUserAsync,
    addResumeAsync,
    patchResumeAsync,
    deleteResumeAsync,
    addCoverLetterAsync,
    patchCoverLetterAsync,
    deleteCoverLetterAsync,
    addJobPostingAsync,
    patchJobPostingAsync,
    deleteJobPostingAsync,
    patchTailoredCoverLetterAsync, addTailoredCoverLetterAsync, deleteTailoredCoverLetterAsync, sendTailorRequestAsync
} from "./thunks";


const INITIAL_STATE =     {
    token: null,
    user: {
        uuid: 1,
        username: "Kevin123",
        password: "password",
        email: "kevinp@live.ca",
        name: "Kevin",
        resumes: [],
        coverLetters: [],
        jobPostings: [],
        tailoredCoverLetters: [],
        appliedJobPostings: {
            idle: [],
            pending: [],
            fulfilled: [],
            rejected: []
        }
    },
    error: null
}

export const userListSlice = createSlice({
    name: 'userList',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // USERS!!
            .addCase(getUserAsync.pending, (state) => {
                state.getUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                state.getUser = REQUEST_STATE.FULFILLED;
                state.user = action.payload;
            })
            .addCase(getUserAsync.rejected, (state, action) => {
                state.getUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(addUserAsync.pending, (state) => {
                state.addUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addUserAsync.fulfilled, (state, action) => {
                state.addUser = REQUEST_STATE.FULFILLED;
                state.user = action.payload;
            })
            .addCase(addUserAsync.rejected, (state, action) => {
                state.addUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(patchUserAsync.pending, (state) => {
                state.patchUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(patchUserAsync.fulfilled, (state, action) => {
                state.patchUser = REQUEST_STATE.FULFILLED;
                state.user = action.payload;
            })
            .addCase(patchUserAsync.rejected, (state, action) => {
                state.patchUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(deleteUserAsync.pending, (state) => {
                state.deleteUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteUserAsync.fulfilled, (state, action) => {
                state.deleteUser = REQUEST_STATE.FULFILLED;
                state.user = null;
            })
            .addCase(deleteUserAsync.rejected, (state, action) => {
                state.deleteUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(loginUserAsync.pending, (state) => {
                state.loginUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.loginUser = REQUEST_STATE.FULFILLED;
                // state.user = action.payload;

                let information = action.payload.token_object;
                console.log("Updating the frontend user info from backend");
                console.log(information.user);
                console.log("Apple");
                console.log(information);
                state.token = information.token;
                console.log(state.token);
                console.log(information.token);
                state.user = information.user;
                console.log("Current user state after logging in");
                console.log(state.user);
            })
            .addCase(loginUserAsync.rejected, (state, action) => {
                state.loginUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(logoutUserAsync.pending, (state) => {
                state.logoutUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(logoutUserAsync.fulfilled, (state, action) => {
                state.logoutUser = REQUEST_STATE.FULFILLED;
                state.authenticationToken = null;
                state.user = null;
            })
            .addCase(logoutUserAsync.rejected, (state, action) => {
                state.logoutUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })

            // ===== RESUMES ===========
            .addCase(addResumeAsync.pending, (state) => {
                state.addResume = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addResumeAsync.fulfilled, (state, action) => {
                state.addResume = REQUEST_STATE.FULFILLED;
                state.user.resumes.push(action.payload);
            })
            .addCase(addResumeAsync.rejected, (state, action) => {
                state.addResume = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(patchResumeAsync.pending, (state) => {
                state.patchResume = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(patchResumeAsync.fulfilled, (state, action) => {
                state.patchResume = REQUEST_STATE.FULFILLED;
                //TODO
            })
            .addCase(patchResumeAsync.rejected, (state, action) => {
                state.patchResume = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(deleteResumeAsync.pending, (state) => {
                state.deleteResume = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteResumeAsync.fulfilled, (state, action) => {
                state.deleteResume = REQUEST_STATE.FULFILLED;
                state.user.resumes = state.user.resumes.filter(resume => resume.uuid !== action.payload);
            })
            .addCase(deleteResumeAsync.rejected, (state, action) => {
                state.deleteResume = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })

            // ===== Cover Letters =====
            .addCase(addCoverLetterAsync.pending, (state) => {
                state.addCoverLetter = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addCoverLetterAsync.fulfilled, (state, action) => {
                state.addCoverLetter = REQUEST_STATE.FULFILLED;
                state.user.coverLetters.push(action.payload);
            })
            .addCase(addCoverLetterAsync.rejected, (state, action) => {
                state.addCoverLetter = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(patchCoverLetterAsync.pending, (state) => {
                state.patchCoverLetter = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(patchCoverLetterAsync.fulfilled, (state, action) => {
                state.patchCoverLetter = REQUEST_STATE.FULFILLED;
                //TODO
            })
            .addCase(patchCoverLetterAsync.rejected, (state, action) => {
                state.patchCoverLetter = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(deleteCoverLetterAsync.pending, (state) => {
                state.deleteCoverLetter = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteCoverLetterAsync.fulfilled, (state, action) => {
                state.deleteCoverLetter = REQUEST_STATE.FULFILLED;
                state.user.coverLetters = state.user.coverLetters.filter(resume => resume.uuid !== action.payload);
            })
            .addCase(deleteCoverLetterAsync.rejected, (state, action) => {
                state.deleteCoverLetter = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })

            // ===== Job Postings =====
            .addCase(addJobPostingAsync.pending, (state) => {
                state.addJobPosting = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addJobPostingAsync.fulfilled, (state, action) => {
                state.addJobPosting = REQUEST_STATE.FULFILLED;
                state.user.jobPostings.push(action.payload);
            })
            .addCase(addJobPostingAsync.rejected, (state, action) => {
                state.addJobPosting = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(patchJobPostingAsync.pending, (state) => {
                state.patchJobPosting = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(patchJobPostingAsync.fulfilled, (state, action) => {
                state.patchJobPosting = REQUEST_STATE.FULFILLED;
                //TODO
            })
            .addCase(patchJobPostingAsync.rejected, (state, action) => {
                state.patchJobPosting = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(deleteJobPostingAsync.pending, (state) => {
                state.deleteJobPosting = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteJobPostingAsync.fulfilled, (state, action) => {
                state.deleteJobPosting = REQUEST_STATE.FULFILLED;
                state.user.jobPostings = state.user.jobPostings.filter(jobPosting => jobPosting.uuid !== action.payload);
            })
            .addCase(deleteJobPostingAsync.rejected, (state, action) => {
                state.deleteJobPosting = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            // ===== Tailored Cover Letters =====
            .addCase(addTailoredCoverLetterAsync.pending, (state) => {
                state.addTailoredCoverLetter = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addTailoredCoverLetterAsync.fulfilled, (state, action) => {
                state.addTailoredCoverLetter = REQUEST_STATE.FULFILLED;
                state.user.tailoredCoverLetters.push(action.payload);
            })
            .addCase(addTailoredCoverLetterAsync.rejected, (state, action) => {
                state.addTailoredCoverLetter = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(patchTailoredCoverLetterAsync.pending, (state) => {
                state.patchTailoredCoverLetter = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(patchTailoredCoverLetterAsync.fulfilled, (state, action) => {
                state.patchTailoredCoverLetter = REQUEST_STATE.FULFILLED;
            })
            .addCase(patchTailoredCoverLetterAsync.rejected, (state, action) => {
                state.patchTailoredCoverLetter = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(deleteTailoredCoverLetterAsync.pending, (state) => {
                state.deleteTailoredCoverLetter = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteTailoredCoverLetterAsync.fulfilled, (state, action) => {
                state.deleteTailoredCoverLetter = REQUEST_STATE.FULFILLED;
                state.user.tailoredCoverLetters = state.user.tailoredCoverLetters.filter(letter => letter.uuid !== action.payload);
            })
            .addCase(deleteTailoredCoverLetterAsync.rejected, (state, action) => {
                state.deleteTailoredCoverLetter = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            // ===== Send Tailor Request =====
            .addCase(sendTailorRequestAsync.pending, (state) => {
                state.sendTailorRequest = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(sendTailorRequestAsync.fulfilled, (state, action) => {
                state.sendTailorRequest = REQUEST_STATE.FULFILLED;
                state.user.tailoredCoverLetters.push(action.payload); // Assuming the response contains the new tailored cover letter
            })
            .addCase(sendTailorRequestAsync.rejected, (state, action) => {
                state.sendTailorRequest = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }

})

export default userListSlice.reducer
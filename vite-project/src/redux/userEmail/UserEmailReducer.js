import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";

const INITIAL_STATE = {
    userEmail: "nothing",
    getUserEmail: REQUEST_STATE.IDLE,
}

export const userEmailSlice = createSlice({
    name: 'userEmail',
    initialState: INITIAL_STATE,
    reducers: {
        setUserEmail: (state, email) => {
            state.userEmail = email.payload

        }
    },
})

export const {setUserEmail} = userEmailSlice.actions

export default userEmailSlice.reducer
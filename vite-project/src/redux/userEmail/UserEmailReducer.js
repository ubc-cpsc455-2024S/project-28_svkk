import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";

const INITIAL_STATE = {
    userEmail: null,
    getUserEmail: REQUEST_STATE.IDLE,
}

export const userEmailSlice = createSlice({
    name: 'userEmail',
    initialState: INITIAL_STATE,
    reducers: {
        setUserEmail: (state, email) => {
            console.log("CALLED")
            state.userEmail = email.payload
            console.log("new value: " + state.userEmail)
        }
    },
})

export const {setUserEmail} = userEmailSlice.actions

export default userEmailSlice.reducer
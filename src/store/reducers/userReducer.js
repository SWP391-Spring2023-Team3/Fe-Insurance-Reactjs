import { createReducer,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchAuthUser = createAsyncThunk("user/fetch", async(props) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/oauth/token`, {
        "client_id": process.env.REACT_APP_CLIENT_ID,
        "client_secret": process.env.REACT_APP_CLIENT_SECRET,
        "grant_type": process.env.REACT_APP_GRANT_TYPE,
        "email": props.email,
        "password": props.password,
    })
    return res.data;
});



const initialState = {
    data: null,
    isLoading: false,
    error: null,
}


export const UserData = createReducer(initialState, (builder) => {
    builder.addCase(fetchAuthUser.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchAuthUser.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchAuthUser.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})



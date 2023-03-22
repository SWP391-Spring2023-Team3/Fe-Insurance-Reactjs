import { createReducer,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchListPunishment = createAsyncThunk("listPunishment/fetch", async(props) => {
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/punishments`,header)
    return res.data;
});

const initialState = {
    data: null,
    isLoading: false,
    error: null,
}


export const ListPunishmentData = createReducer(initialState, (builder) => {
    builder.addCase(fetchListPunishment.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchListPunishment.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchListPunishment.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchCreatePunishment = createAsyncThunk("createPunishment/fetch", async(props) => {
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const body = {
        "title" : props.data.title,
        "reason" :  props.data.reason,
        "user_id":1,
        "issued_date":  props.data.issuedDate,
        "resolved_date":  props.data.resolvedDate,
        "status": props.data.status,
    }
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/punishments`,body,header)
    return res.data;
});


export const CreatePunishment = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreatePunishment.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchCreatePunishment.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreatePunishment.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchUpdatePunishment = createAsyncThunk("updatePunishment/fetch", async(props) => {
    console.log(props.access_token)
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const body = {
        "title" : props.data.title,
        "reason" :  props.data.reason,
        "user_id":1,
        "issued_date":  props.data.issuedDate,
        "resolved_date":  props.data.resolvedDate,
        "status": props.data.status
    }
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/punishments/${props.id}`,body,header)
    return res.data;
});


export const UpdatePunishment = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreatePunishment.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchCreatePunishment.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreatePunishment.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchDeletePunishment = createAsyncThunk("deletePunishment/fetch", async(props) => {
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/punishments/${props.id}`,header)
    return res.data;
});


export const DeletePunishment = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreatePunishment.fulfilled, (state, action) => {
        state.data = action.payload
        state.isLoading = true
    }).addCase(fetchCreatePunishment.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreatePunishment.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})
import { createReducer,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchListAccident = createAsyncThunk("listAccident/fetch", async(props) => {
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/accidents`,header)
    return res.data;
});

const initialState = {
    data: null,
    isLoading: false,
    error: null,
}


export const ListAccidentData = createReducer(initialState, (builder) => {
    builder.addCase(fetchListAccident.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchListAccident.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchListAccident.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchCreateAccident = createAsyncThunk("createAccident/fetch", async(props) => {
    console.log(props.access_token)
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const body = {
        "title" : props.data.title,
        "reason" :  props.data.reason,
        "user_id":46,
        "issued_date":  props.data.issuedDate,
        "resolved_date":  props.data.resolvedDate,
        "status": props.data.status,
    }
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/accidents`,body,header)
    return res.data;
});


export const CreateAccident = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreateAccident.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchCreateAccident.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreateAccident.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchUpdateAccident = createAsyncThunk("updateAccident/fetch", async(props) => {
    console.log(props.access_token)
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const body = {
        "title" : props.data.title,
        "reason" :  props.data.reason,
        "user_id":46,
        "issued_date":  props.data.issuedDate,
        "resolved_date":  props.data.resolvedDate,
        "status": props.data.status,
    }
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/accidents/${props.id}`,body,header)
    return res.data;
});


export const UpdateAccident = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreateAccident.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchCreateAccident.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreateAccident.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchDeleteAccident = createAsyncThunk("deleteAccident/fetch", async(props) => {
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/accidents/${props.id}`,header)
    return res.data;
});


export const DeleteAccident = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreateAccident.fulfilled, (state, action) => {
        state.data = action.payload
        state.isLoading = true
    }).addCase(fetchCreateAccident.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreateAccident.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})

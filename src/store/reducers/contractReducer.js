import { createReducer,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchListContract = createAsyncThunk("listContract/fetch", async(props) => {
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/contracts`,header)
    return res.data;
});

const initialState = {
    data: [],
    isLoading: false,
    error: null,
}


export const ListContractData = createReducer(initialState, (builder) => {
    builder.addCase(fetchListContract.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchListContract.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchListContract.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchCreateContract = createAsyncThunk("createContract/fetch", async(props) => {
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
        "status": props.data.stautus,
    }
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contracts`,body,header)
    return res.data;
});


export const CreateContract = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreateContract.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchCreateContract.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreateContract.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchUpdateContract = createAsyncThunk("updateContract/fetch", async(props) => {
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
        "status": props.data.status,
    }
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/contracts/${props.id}`,body,header)
    return res.data;
});


export const UpdateContract = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreateContract.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchCreateContract.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreateContract.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchDeleteContract = createAsyncThunk("deleteContract/fetch", async(props) => {
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/contracts/${props.id}`,header)
    return res.data;
});


export const DeleteContract = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreateContract.fulfilled, (state, action) => {
        state.data = action.payload
        state.isLoading = true
    }).addCase(fetchCreateContract.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreateContract.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})
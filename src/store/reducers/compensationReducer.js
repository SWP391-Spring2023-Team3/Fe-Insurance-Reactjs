import { createReducer,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchListCompensation = createAsyncThunk("listCompensation/fetch", async(props) => {
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/compensations`,header)
    return res.data;
});

const initialState = {
    data: null,
    isLoading: false,
    error: null,
}


export const ListCompensationData = createReducer(initialState, (builder) => {
    builder.addCase(fetchListCompensation.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchListCompensation.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchListCompensation.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchCreateCompensation = createAsyncThunk("createCompensation/fetch", async(props) => {
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
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/compensations`,body,header)
    return res.data;
});


export const CreateCompensation = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreateCompensation.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchCreateCompensation.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreateCompensation.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchUpdateCompensation = createAsyncThunk("updateCompensation/fetch", async(props) => {
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
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/compensations/${props.id}`,body,header)
    return res.data;
});


export const UpdateCompensation = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreateCompensation.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchCreateCompensation.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreateCompensation.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchDeleteCompensation = createAsyncThunk("deleteCompensation/fetch", async(props) => {
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/compensations/${props.id}`,header)
    return res.data;
});


export const DeleteCompensation = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreateCompensation.fulfilled, (state, action) => {
        state.data = action.payload
        state.isLoading = true
    }).addCase(fetchCreateCompensation.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreateCompensation.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})



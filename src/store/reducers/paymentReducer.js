import { createReducer,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchListPayment = createAsyncThunk("listPayment/fetch", async(props) => {
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/payments`,header)
    return res.data;
});

const initialState = {
    data: null,
    isLoading: false,
    error: null,
}


export const ListPaymentData = createReducer(initialState, (builder) => {
    builder.addCase(fetchListPayment.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchListPayment.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchListPayment.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchCreatePayment = createAsyncThunk("createPayment/fetch", async(props) => {
    console.log(props.access_token)
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const body = {
        "user_id":46,
        "title":props.data.title,
        "date_issued":  props.data.issuedDate,
        "amount":  props.data.amount,
        "description": props.data.description
    }
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/payments`,body,header)
    return res.data;
});


export const CreatePayment = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreatePayment.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchCreatePayment.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreatePayment.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchUpdatePayment = createAsyncThunk("updatePayment/fetch", async(props) => {
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const body = {
        "user_id":46,
        "title":props.data.title,
        "date_issued":  props.data.issuedDate,
        "amount":  props.data.amount,
        "description": props.data.description
    }
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/payments/${props.id}`,body,header)
    return res.data;
});


export const UpdatePayment = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreatePayment.fulfilled, (state, action) => {
        state.isLoading = true
        state.data = action.payload
    }).addCase(fetchCreatePayment.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreatePayment.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


export const fetchDeletePayment = createAsyncThunk("deletePayment/fetch", async(props) => {
    const header = {
        headers: {
            "Authorization" : `Bearer ${props.access_token}`
        }
    }
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/payments/${props.id}`,header)
    return res.data;
});


export const DeletePayment = createReducer(initialState, (builder) => {
    builder.addCase(fetchCreatePayment.fulfilled, (state, action) => {
        state.data = action.payload
        state.isLoading = true
    }).addCase(fetchCreatePayment.pending, (state, action) => {
        state.isLoading = false
    }).addCase(fetchCreatePayment.rejected, (state, action) => {
        state.isLoading = true
        state.error = action.error.message
    })
})


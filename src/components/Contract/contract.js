import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiContract } from '../../actions/action-api';




const Contract = () => {
    const dispatch = useDispatch();
    const { payload, loading, error } = useSelector(state => state.payload);
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return {

    }
}
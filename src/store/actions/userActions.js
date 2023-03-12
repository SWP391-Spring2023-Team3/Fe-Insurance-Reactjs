import { configureStore } from "@reduxjs/toolkit";
import Store,{rootReducer} from '../reducers/reducer'


export const Logout = () => {
    Store = configureStore({
        reducer : rootReducer
    })
};


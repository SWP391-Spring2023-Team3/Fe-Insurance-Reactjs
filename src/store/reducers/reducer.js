import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {UserData} from "./userReducer";

const rootReducer = combineReducers({
    userData:UserData,
})

export default configureStore({
    reducer:rootReducer
})

export {rootReducer}
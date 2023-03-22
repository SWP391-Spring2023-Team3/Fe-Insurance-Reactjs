import { configureStore  } from "@reduxjs/toolkit";
import { persistStore, persistReducer, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reducer from './reducers/reducer';
import thunkMiddleware from 'redux-thunk';



const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const middleware = [thunkMiddleware];

export const store = configureStore({
    reducer: persistedReducer,
    middleware,
})

export const persistor = persistStore(store);
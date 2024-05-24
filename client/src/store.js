import {configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth'
import { apiSlice } from './slice/apiSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;
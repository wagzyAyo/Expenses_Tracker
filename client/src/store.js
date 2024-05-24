import {configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {},
    middleware: (getDefaultMidlleware)=> getDefaultMidlleware(),
    devTools: true,
});

export default store;
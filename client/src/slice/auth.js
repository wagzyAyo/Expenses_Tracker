import { createSlice } from "@reduxjs/toolkit";

//initial state for the authslice
const initialState = {
    userInfo: 
    localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo'))
    : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //Action to set users credentials
        setCredentials : (state, action) =>{
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        //Action to clear users credentials
        clearCredentials : (state) =>{
            state.userInfo = null;
            document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; SameSite=Strict';
            localStorage.removeItem('userInfo')
        }
    }
})

export const {setCredentials, clearCredentials} = authSlice.actions
export default authSlice.reducer
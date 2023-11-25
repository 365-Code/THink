// Slice is responsible for tracking initial state and all reduceres are collected here, linker of reducers, initial point

// createSlice = createContext in Context
// 

import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    auth: {
        loggedIn: false,
        user: null
    }
}

export const authSlice = createSlice({
    name: 'authChecker',
    initialState,
    reducers: {
        // consist of functions for this slice
        authSignIn: (state, action) => {
            
            state.auth = {
                loggedIn: true,
                user: action.payload
            }
            
        },
        authSignOut: (state) => {
            state.auth = {
                loggedIn: false,
                user: null
            }
        }
    }
})

export const { authSignIn, authSignOut } = authSlice.actions

export default authSlice.reducer
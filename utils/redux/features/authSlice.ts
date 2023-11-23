// Slice is responsible for tracking initial state and all reduceres are collected here, linker of reducers, initial point

// createSlice = createContext in Context
// 

import {createSlice, nanoid} from "@reduxjs/toolkit"


const initialState = {
    authUser: null
}


export const authSlice = createSlice({
    name: 'authChecker',
    initialState,
    reducers: {
        // consist of functions for this slice
        signIn: (state, action) => {
            const authUser = {
                id: nanoid(),
                user: action.payload
            }
        }
    }
})
import {configureStore} from "@reduxjs/toolkit"
import blogReducer from "./features/blogSlice"
import authReducer from "./features/authSlice"

export const store = configureStore({
    // reducer is an object, like one of a shop in the entire store 
    reducer: {
        blogReducer,
        authReducer
    },
})
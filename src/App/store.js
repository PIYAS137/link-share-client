import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Redux/Features/userSlice";
import baseApi from "../Redux/API/baseApi";



const store = configureStore({
    reducer : {
        [baseApi.reducerPath] : baseApi.reducer,
        user : UserSlice
    },
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(baseApi.middleware)
})

export default store;
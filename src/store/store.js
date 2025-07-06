import {configureStore} from '@reduxjs/toolkit'
// import authSlice
// import authSlice from ".authSlice.js"
import authSlice from "./authSlice"
const store = configureStore (
    {
        reducer: {

            auth : authSlice,
        }
    }
)
export default store ;
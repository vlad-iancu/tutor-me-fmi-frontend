import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../app/login/UserSlice'
const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
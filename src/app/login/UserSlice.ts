import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { loginThunk } from "./LoginThunk";

export type AuthState = {
    name?: string,
    email?: string,
    token?: string
}
export type Credentials = Omit<AuthState, "token">
const initialState: AuthState = {}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeToken: {
            reducer: (state, { payload }: PayloadAction<string>) => { state.token = payload },
            prepare: (token: string) => ({ payload: token })
        },
        updateCredentials: {
            reducer: (state, { payload }: PayloadAction<Credentials>) => { Object.assign(state, payload) },
            prepare: (name: string, email: string) => ({ payload: { name, email } }),
        },
        updateAuthData: {
            reducer: (state, { payload }: PayloadAction<AuthState>) => { Object.assign(state, payload) },
            prepare: (name: string, email: string, token: string) => ({ payload: { name, email, token } }),
        }
    },
    extraReducers: builder => {
        builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
            console.log("We have the reducer called")
            Object.assign(state, payload)
        })
    }

})

export const { changeToken, updateCredentials, updateAuthData } = userSlice.actions
export default userSlice.reducer

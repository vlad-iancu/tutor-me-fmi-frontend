import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { AuthState } from "./UserSlice";

type LoginCredentials = {
    email: string,
    password: string
}
type RegisterCredentials = {
    email: string,
    password: string,
    name: string
}
type User = AuthState
export const loginThunk = createAsyncThunk<User, LoginCredentials, { state: RootState }>("login", async (credentials, thunkApi) => {
    return { email: credentials.email, token: "ABCD1234", name: "UserName" }
    //Here will be the API request once the backend team is ready
})
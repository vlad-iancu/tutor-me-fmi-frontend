import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { AuthState, Credentials } from "./UserSlice";

type LoginCredentials = {
    email: string,
    password: string
}
type User = AuthState
export const loginThunk = createAsyncThunk<User, LoginCredentials, { state: RootState }>("login", async (credentials, thunkApi) => {
    return { email: credentials.email, token: "ABCD1234" }
    //Here will be the API request once the backend team is ready
})
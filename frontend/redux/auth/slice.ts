import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../store';
// @ts-ignore
export interface LoginPayload {
    name: string;
    email: string;
    password: string;
}
// @ts-ignore
export const loggingSlice = createSlice({
    name: 'auth',
    initialState: {
        user: undefined,
        logging: false,
        isLoggedIn: false,
    },
    reducers: {
        // login logout
        // @ts-ignore
        login(state, action) {
            state.logging = true;
        },
        loginSuccess(state: RootState, action: PayloadAction<any>) {
            state.logging = false;
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        loginFailed(state: RootState, action: PayloadAction<any>) {
            state.logging = false;
        },
        logout(state: RootState) {
            state.isLoggedIn = false;
            state.user = undefined;
            localStorage.removeItem('token');
            window.location.href = 'login';
        },
        // register
        register(state: RootState) {
            state.logging = true;
        },
        registerSuccess(state: RootState, action) {
            state.logging = false;
            // state.isLoggedIn = true;
            state.user = action.payload;
        },
        registerFailed(state: RootState) {
            state.logging = false;
        },
    }
});

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsLogging = (state: RootState) => state.auth.logging;
// @ts-ignore
const authReducer = loggingSlice.reducer;
export default authReducer;

export const { loginSuccess, logout, loginFailed, login, registerSuccess, registerFailed, register } = loggingSlice.actions;
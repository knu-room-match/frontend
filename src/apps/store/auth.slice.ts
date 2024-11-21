import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    isAuthenticated: boolean;
    isParticipated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
    isParticipated: true,
};

export const authSlice = createSlice({
    name: "app/auth",
    initialState,
    reducers: {},
});

export const authReducers = authSlice.reducer;
export const authActions = authSlice.actions;

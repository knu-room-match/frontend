import { authReducers } from "./auth.slice";
import { registerInfoReducers } from "./register-info.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        auth: authReducers,
        registerInfo: registerInfoReducers,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

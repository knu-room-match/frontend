import { RegisterInfoProperties } from "../types/register-info";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RegisterInfoProperties = {
    wakeUpTime: [4, 12],
    sleepTime: [21, 29],
    sleepNoiseResist: "",
    sleepLight: "",
    alarmSetting: "",
    sleepHabit: [],
    heat: [],
    cold: [],
    dirty: [],
    cleanCycle: "",
    showerDuration: "",
    bug: "",
    roomMateRelation: "",
    roomMateShare: "",
    friendsInvitation: "",
    returnHomeFrequency: "",
    studyArea: "",
    workoutFrequency: "",
    workoutTime: "",
    gameType: "",
    alcohol: "",
    smoking: "",
};

export const registerInfoSlice = createSlice({
    name: "app/registerInfo",
    initialState,
    reducers: {
        setRegisterInfo: (state, action: PayloadAction<Partial<RegisterInfoProperties>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const registerInfoActions = registerInfoSlice.actions;
export const registerInfoReducers = registerInfoSlice.reducer;

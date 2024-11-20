import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RegisterInfoProperties = {
    wakeUpTime: [],
    sleepTime: [],
    sleepNoiseResist: [],
    sleepLight: "",
    alarmSetting: "",
    sleepHabit: "",
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

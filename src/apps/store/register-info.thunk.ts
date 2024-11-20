import { RegisterInfoProperties } from "../types/register-info";
import { registerInfoActions } from "./register-info.slice";
import { RootDispatch } from "./store";

export const registerInfoThunk = (newState: RegisterInfoProperties, asyncCallBack: Function) => {
    return async (dispatch: RootDispatch) => {
        console.log(1);
        await new Promise((resolve, _reject) => {
            resolve(dispatch(registerInfoActions.setRegisterInfo(newState)));
        });

        console.log(2);
        await new Promise((resolve, _reject) => {
            resolve(asyncCallBack());
        });

        console.log(3);
    };
};

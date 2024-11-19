import React, { createContext } from "react";

import { RegisterInfoEnvType } from "@/pages/profile/RegisterInfoEnvSection";
import { RegisterInfoHobbyType } from "@/pages/profile/RegisterInfoHobbySection";
import { RegisterInfoRelationType } from "@/pages/profile/RegisterInfoRelationSection";
import { RegisterInfoSleepType } from "@/pages/profile/RegisterInfoSleepSection";

// prettier-ignore
export type RegisterInfoContextType = 
    RegisterInfoSleepType &
    RegisterInfoEnvType &
    RegisterInfoRelationType &
    RegisterInfoHobbyType;

export interface RegisterInfoContextProviderProps extends RegisterInfoContextType {
    children: React.ReactNode;
}

export const RegisterInfoContext = createContext<RegisterInfoContextType | null>(null);

export const RegisterInfoContextProvider = ({
    children,
    ...rest
}: RegisterInfoContextProviderProps) => {
    return (
        <RegisterInfoContext.Provider value={{ ...rest }}>{children}</RegisterInfoContext.Provider>
    );
};

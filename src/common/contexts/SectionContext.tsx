import React, { createContext } from "react";

export interface SectionContextType {
    initialSectionNumber?: number;
    maxSectionNumber: number;
    minSectionNumber: number;
    onFirstSectionCallback?: () => void;
    onLastSectionCallback?: () => void;
}

export interface SectionContextProviderProps extends SectionContextType {
    children?: React.ReactNode;
}

export const SectionContext = createContext<SectionContextType | null>(null);

export const SectionContextProvider = ({
    initialSectionNumber,
    maxSectionNumber,
    minSectionNumber,
    onFirstSectionCallback,
    onLastSectionCallback,
    children,
}: SectionContextProviderProps) => {
    return (
        <SectionContext.Provider
            value={{
                initialSectionNumber,
                minSectionNumber,
                maxSectionNumber,
                onFirstSectionCallback,
                onLastSectionCallback,
            }}
        >
            {children}
        </SectionContext.Provider>
    );
};

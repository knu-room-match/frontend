import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import { useSectionContext } from "@/common/contexts/useSectionContext";

export const useSection = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { onFirstSectionCallback, onLastSectionCallback, minSectionNumber, maxSectionNumber } =
        useSectionContext();

    const getSection = useCallback(() => {
        const sectionId = Number(searchParams.get("section"));
        console.log(sectionId);
        return Number(searchParams.get("section"));
    }, [searchParams]);

    const setSection = useCallback(
        (section: number) => {
            setSearchParams({ section: section.toString() });
        },
        [setSearchParams],
    );

    const prevSection = useCallback(() => {
        const currentSection = getSection();
        if (currentSection <= minSectionNumber) {
            onFirstSectionCallback && onFirstSectionCallback();
        }
        setSection(currentSection - 1);
    }, []);

    const nextSection = useCallback(() => {
        const currentSection = getSection();
        if (currentSection >= maxSectionNumber) {
            onLastSectionCallback && onLastSectionCallback();
        }
        setSection(currentSection + 1);
    }, []);

    return { getSection, setSection, prevSection, nextSection };
};

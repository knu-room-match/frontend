import { useNavigate, useSearchParams } from "react-router-dom";

import { useSection } from "@/hooks/useSection";

import RegisterInfoEnvSection from "./RegisterInfoEnvSection";
import RegisterInfoHobbySection from "./RegisterInfoHobbySection";
import RegisterInfoRelationSection from "./RegisterInfoRelationSection";
import RegisterInfoSleepSection from "./RegisterInfoSleepSection";
import { SectionContextProvider } from "@/contexts/SectionContext";
import { RegisterInfoContextProvider } from "@/domains/profile/contexts/RegisterInfoContext";

const sections = [
    <RegisterInfoSleepSection />,
    <RegisterInfoEnvSection />,
    <RegisterInfoRelationSection />,
    <RegisterInfoHobbySection />,
];

const SectionRouter = () => {
    const { getSection } = useSection();
    return sections[getSection() - 1];
};

export default function RegisterInfoPage() {
    const navigate = useNavigate();

    return (
        <RegisterInfoContextProvider>
            <SectionContextProvider
                initialSectionNumber={1}
                minSectionNumber={1}
                maxSectionNumber={sections.length}
                onFirstSectionCallback={() => navigate("/match")}
                onLastSectionCallback={() => navigate("/match")}
            >
                <SectionRouter />
            </SectionContextProvider>
        </RegisterInfoContextProvider>
    );
}

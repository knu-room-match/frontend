import { useNavigate } from "react-router-dom";

import RegisterInfoEnvSection from "./RegisterInfoEnvSection";
import RegisterInfoHobbySection from "./RegisterInfoHobbySection";
import RegisterInfoRelationSection from "./RegisterInfoRelationSection";
import RegisterInfoSleepSection from "./RegisterInfoSleepSection";
import { SectionContextProvider } from "@/common/contexts/SectionContext";
import { useSection } from "@/common/hooks/useSection";

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
        <SectionContextProvider
            initialSectionNumber={1}
            minSectionNumber={1}
            maxSectionNumber={sections.length}
            onFirstSectionCallback={() => navigate("/match")}
            onLastSectionCallback={() => navigate("/match")}
        >
            <SectionRouter />
        </SectionContextProvider>
    );
}

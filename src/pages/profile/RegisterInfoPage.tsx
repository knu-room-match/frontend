import { useNavigate } from "react-router-dom";

import { FormProps } from "@/components/forms/FormRenderer";

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

const form: FormProps = {
    title: "2024 상반기 경북대학교 기숙사",
    description: "기숙사 입주를 위한 정보를 입력해주세요.",
    questions: [
        {
            questionText: "잠귀",
            questionType: "selector",
            dataType: "string",
            options: [
                { label: "밝음", value: "bright" },
                { label: "보통", value: "normal" },
                { label: "어두움", value: "dark" },
            ],
        },
    ],
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

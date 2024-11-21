import { useState } from "react";

import { FormFactory } from "./FormFactory";

export const QuestionTypes = {
    checkbox: "checkbox",
    selector: "selector",
    // slider: "slider",
    // doubleSlider: "doubleSlider",
} as const;

export interface Question {
    questionText: string;
    questionType: keyof typeof QuestionTypes;
    dataType: string;
    options: unknown[];
}

export interface FormProps {
    title: string;
    description: string;
    questions: Question[];
}

export interface FormState {
    formState: Record<string, unknown>;
    setFormState: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
}

export type FormRendererProps = FormProps & FormState;

export const FormRenderer = ({
    title,
    description,
    questions,
    formState,
    setFormState,
}: FormRendererProps) => {
    const forms = questions.map((question) => {
        return {
            component: FormFactory({ questionType: question.questionType }),
            props: question,
        };
    });

    return (
        <div>{forms.map((form) => form.component({ ...form.props, formState, setFormState }))}</div>
    );
};

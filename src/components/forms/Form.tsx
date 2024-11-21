import { useState } from "react";

import { FormFactory } from "./FormFactory";

export const QuestionTypes = {
    checkbox: "checkbox",
    selector: "selector",
    slider: "slider",
    doubleSlider: "doubleSlider",
} as const;

export interface Question<T> {
    questionText: string;
    questionType: keyof typeof QuestionTypes;
    dataType: string;
    options: T[];
}

export interface FormProps<T> {
    title: string;
    description: string;
    questions: Question<T>[];
}

export interface FormState {
    formState: Record<string, unknown>;
    setFormState: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
}

export const Form = <Q,>({ title, description, questions }: FormProps<Q>) => {
    const [formResponse, setFormResponse] = useState<object>({});

    const FormComponent = FormFactory({ questionType: questions[0].questionType });
    const FormComponentProps = questions[0];
    return <div>{FormComponent && <FormComponent {...FormComponentProps} />}</div>;
};

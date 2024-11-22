import { FormFactory } from "./FormFactory";

export const QuestionTypes = {
    checkbox: "checkbox",
    selector: "selector",
    slider: "slider",
    doubleSlider: "doubleSlider",
} as const;

export interface Option {
    label?: string;
    value: any;
}

export interface Question {
    questionId: number;
    questionText: string;
    questionType: keyof typeof QuestionTypes;
    dataType: string;
    options: Option[];
}

export interface FormProps {
    _id: string;
    title: string;
    description: string;
    questions: Question[];
}

export interface FormState {
    formState: FormProps;
    setFormState: React.Dispatch<React.SetStateAction<FormProps>>;
}

export type FormRendererProps = FormProps & FormState;

export const FormRenderer = ({
    _id,
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

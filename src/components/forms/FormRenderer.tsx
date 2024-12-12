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

const str: A = "a";

export interface Question {
    questionId: number;
    questionText: string;
    questionType: keyof typeof QuestionTypes;
    dataType: string;
    options: Option[];
}

export interface Form {
    _id: string;
    title: string;
    description: string;
    questions: Question[];
}

export interface FormState {
    formState: Form;
    setFormState: React.Dispatch<React.SetStateAction<Form>>;
}

export interface FormRendererProps {
    questions: Question[];
    formState: Form;
    setFormState: React.Dispatch<React.SetStateAction<Form>>;
}

export const FormItemsRenderer = ({ questions, formState, setFormState }: FormRendererProps) => {
    const formItems = questions.map((question) => {
        return {
            component: FormFactory({ questionType: question.questionType }),
            props: question,
        };
    });

    return formItems.map((formItem) => {
        return formItem.component({ ...formItem.props, formState, setFormState });
    });
};

import { useId } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FormProps, Option } from "./FormRenderer";

// prettier-ignore
export type SelectorWithLabelFormProps = {
    questionId: number;
    questionText: string;
    options: Option[];
    formState: FormProps;
    setFormState: React.Dispatch<React.SetStateAction<FormProps>>;
};

export const SelectorWithLabelForm = ({
    questionId,
    questionText,
    options,
    formState,
    setFormState,
}: SelectorWithLabelFormProps) => {
    const htmlFor = useId();

    const questionIndex = formState.questions.findIndex((q) => q.questionId === questionId);

    const selectedValue = formState.questions[questionIndex].options[0]?.value || "";

    return (
        <div data-testid="selector-with-label-form">
            <label className="py-1 font-bold" htmlFor={htmlFor}>
                {questionText}
            </label>
            <Select
                value={selectedValue}
                onValueChange={(selectedValue) => {
                    const selectedOption = options.find((option) => option.value === selectedValue);
                    const updatedFormState = { ...formState };
                    updatedFormState.questions[questionIndex].options = [
                        {
                            label: selectedOption?.label || "",
                            value: selectedValue,
                        },
                    ];
                    setFormState(updatedFormState);
                }}
            >
                <SelectTrigger className="w-full rounded-xl" asChild={false}>
                    <SelectValue placeholder="옵션을 선택해주세요"></SelectValue>
                </SelectTrigger>
                <SelectContent id={htmlFor}>
                    {options.map((option, index) => {
                        return (
                            <SelectItem
                                key={index}
                                value={option.value as string}
                                data-testid={`select-options_${option.label}`}
                            >
                                {option.label as string}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
};

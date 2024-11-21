import { useId } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FormState, Question } from "./FormRenderer";

// prettier-ignore
export type SelectorWithLabelFormProps = 
    Omit<Question, "questionType" | "dataType"> &
    FormState

export const SelectorWithLabelForm = ({
    questionText,
    options,
    formState,
    setFormState,
}: SelectorWithLabelFormProps) => {
    const htmlFor = useId();

    return (
        <div data-testid="selector-with-label-form">
            <label className="py-1 font-bold" htmlFor={htmlFor}>
                {questionText}
            </label>
            <Select
                value={formState[questionText] as string}
                onValueChange={(value) =>
                    setFormState({
                        ...formState,
                        [questionText]: [value],
                    })
                }
            >
                <SelectTrigger className="w-full rounded-xl" asChild={false}>
                    <SelectValue placeholder="옵션을 선택해주세요"></SelectValue>
                </SelectTrigger>
                <SelectContent id={htmlFor}>
                    {options.map((option, index) => {
                        return (
                            <SelectItem
                                key={index}
                                value={option as string}
                                data-testid={`select-options_${option}`}
                            >
                                {option as string}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
};

import { useId } from "react";

import { Checkbox } from "@/components/ui/checkbox";

import { FormState, Question } from "./FormRenderer";

// prettier-ignore
export type CheckBoxWithLabelFormProps = 
    Omit<Question, "questionType" | "dataType"> &
    FormState;

export const CheckBoxWithLabelForm = ({
    questionText,
    options,
    formState,
    setFormState,
}: CheckBoxWithLabelFormProps) => {
    const htmlFor = useId();

    return (
        <div className="flex flex-col gap-1" data-testid="checkbox-with-label-form">
            <p className="font-bold">{questionText}</p>

            {options.map((option, index) => {
                return (
                    <div key={index} className="flex items-center gap-1">
                        <Checkbox
                            data-testid={`checkbox_${option.label}`}
                            id={htmlFor}
                            className="block w-5 h-5"
                            checked={formState[questionText]
                                .map((state) => state.value)
                                .includes(option.value)}
                            onCheckedChange={(isChecked) => {
                                if (isChecked) {
                                    setFormState({
                                        ...formState,
                                        [questionText]: [
                                            ...formState[questionText],
                                            { value: option.value },
                                        ],
                                    });
                                } else {
                                    setFormState({
                                        ...formState,
                                        [questionText]: formState[questionText].filter(
                                            (state) => state.value !== option.value,
                                        ),
                                    });
                                }
                            }}
                        />
                        <label htmlFor={`checkbox_${option.label}`}>{option.label}</label>
                    </div>
                );
            })}
        </div>
    );
};

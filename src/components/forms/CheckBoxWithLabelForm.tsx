import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";

import { FormState, Question } from "./Form";

export type CheckBoxItem = {
    id: string;
    label: string;
};

// prettier-ignore
export type CheckBoxWithLabelFormProps = 
    Omit<Question<string>, "questionType" | "dataType"> &
    FormState;

export const CheckBoxWithLabelForm = ({
    questionText,
    options,
    formState,
    setFormState,
}: CheckBoxWithLabelFormProps) => {
    return (
        <div className="flex flex-col gap-1" data-testid="checkbox-with-label-form">
            <p className="font-bold">{questionText}</p>

            {options.map((option, index) => {
                return (
                    <div key={index} className="flex items-center gap-1">
                        <Checkbox
                            data-testid={`checkbox_${option}`}
                            id={`checkbox_${option}`}
                            className="block w-5 h-5"
                            checked={(formState[questionText] as Array<string>).includes(option)}
                            onCheckedChange={(isChecked) => {
                                if (isChecked) {
                                    setFormState({
                                        ...formState,
                                        [questionText]: [
                                            ...(formState[questionText] as Array<string>),
                                            option,
                                        ],
                                    });
                                } else {
                                    setFormState({
                                        ...formState,
                                        [questionText]: (
                                            formState[questionText] as Array<string>
                                        ).filter((item) => item !== option),
                                    });
                                }
                            }}
                        />
                        <label htmlFor={`checkbox_${option}`}>{option}</label>
                    </div>
                );
            })}
        </div>
    );
};

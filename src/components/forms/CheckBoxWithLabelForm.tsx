import { useCallback, useId, useMemo } from "react";

import { Checkbox } from "@/components/ui/checkbox";

import { FormState, Question } from "./FormRenderer";
import { CheckedState } from "@radix-ui/react-checkbox";

// prettier-ignore
export type CheckBoxWithLabelFormProps = 
    Omit<Question, "questionType" | "dataType"> &
    FormState;

export const CheckBoxWithLabelForm = ({
    questionId,
    questionText,
    options,
    formState,
    setFormState,
}: CheckBoxWithLabelFormProps) => {
    const htmlFor = useId();
    const questionIndex = formState.questions.findIndex((q) => q.questionId === questionId);

    const handleCheckboxChange = useCallback(
        (option: (typeof options)[number], checked: CheckedState) => {
            const updatedQuestions = [...formState.questions];
            const updatedOptions = [...updatedQuestions[questionIndex].options];

            if (checked) {
                updatedOptions.push(option);
            } else {
                const optionIndex = updatedOptions.findIndex((opt) => opt.value === option.value);
                if (optionIndex > -1) updatedOptions.splice(optionIndex, 1);
            }

            updatedQuestions[questionIndex] = {
                ...updatedQuestions[questionIndex],
                options: updatedOptions,
            };

            setFormState({
                ...formState,
                questions: updatedQuestions,
            });
        },
        [formState, questionIndex, setFormState],
    );

    return (
        <div className="flex flex-col gap-1" data-testid="checkbox-with-label-form">
            <p className="font-bold">{questionText}</p>

            {options.map((option, index) => {
                const isChecked = formState.questions[questionIndex].options.some(
                    (selectedOption) => selectedOption.value === option.value,
                );

                return (
                    <div key={index} className="flex items-center gap-1">
                        <Checkbox
                            data-testid={`checkbox_${option.label}`}
                            id={`${htmlFor}_${option.label}`}
                            className="block w-5 h-5"
                            checked={isChecked}
                            onCheckedChange={(checked) => handleCheckboxChange(option, checked)}
                        />
                        <label htmlFor={`${htmlFor}_${option.label}`}>{option.label}</label>
                    </div>
                );
            })}
        </div>
    );
};

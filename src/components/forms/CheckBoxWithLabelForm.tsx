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
    return (
        <div className="flex flex-col gap-1" data-testid="checkbox-with-label-form">
            <p className="font-bold">{questionText}</p>

            {options.map((option, index) => {
                return (
                    <div key={index} className="flex items-center gap-1">
                        <Checkbox
                            data-testid={`checkbox_${option.label}`}
                            id={`checkbox_${option.label}`}
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
                                            { value: true },
                                        ],
                                    });
                                } else {
                                    setFormState({
                                        ...formState,
                                        [questionText]: [
                                            ...formState[questionText],
                                            { value: false },
                                        ],
                                    });
                                }
                            }}
                        />
                        <label htmlFor={`checkbox_${option}`}>{option.label}</label>
                    </div>
                );
            })}
        </div>
    );
};

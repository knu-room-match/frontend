import { useEffect, useState } from "react";

import { Slider } from "@/components/ui/slider";

import { FormState, Question } from "./FormRenderer";

// prettier-ignore
export type SliderWithLabelFormProps = 
    Omit<Question, "questionType" | "dataType"> &
    FormState;

export const SliderWithLabelForm = ({
    questionId,
    questionText,
    options,
    formState,
    setFormState,
}: SliderWithLabelFormProps) => {
    const min = options[0];
    const max = options[options.length - 1];
    const question = formState.questions.find((q) => q.questionId === questionId);
    const [value, setValue] = useState(question?.options[0].value);

    useEffect(() => {
        if (question?.options[0].value !== value) {
            setValue(question?.options[0].value);
        }
    }, [question?.options[0].value]);

    const handleValueChange = (newValue: number[]) => {
        const updatedValue = newValue[0];
        setValue(updatedValue);

        const updatedQuestions = formState.questions.map((q) =>
            q.questionId === questionId
                ? {
                      ...q,
                      options: [
                          {
                              value: updatedValue,
                              label:
                                  options.find((opt) => opt.value === updatedValue)?.label ||
                                  String(updatedValue),
                          },
                      ],
                  }
                : q,
        );
        setFormState({
            ...formState,
            questions: updatedQuestions,
        });
    };

    return (
        <div>
            <p className="font-bold">{questionText}</p>
            <div className="px-2">
                <Slider
                    data-testid="slider-with-label-form"
                    className="pt-4 text-gray-500"
                    defaultValue={[value]}
                    value={[value]}
                    onValueChange={handleValueChange}
                    min={min.value}
                    max={max.value}
                    step={1}
                />
                <div className="flex justify-between my-1">
                    <span className="text-sm text-gray-500">{min.label}</span>
                    <span className="text-sm text-gray-500">{max.label}</span>
                </div>
            </div>
        </div>
    );
};

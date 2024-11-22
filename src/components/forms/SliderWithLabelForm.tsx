import { Slider } from "@/components/ui/slider";

import { FormState, Question } from "./FormRenderer";

// prettier-ignore
export type SliderWithLabelFormProps = 
    Omit<Question, "questionType" | "dataType"> &
    FormState;

/**
 * 기본 인자
 */

export const SliderWithLabelForm = ({
    questionText,
    options,
    formState,
    setFormState,
}: SliderWithLabelFormProps) => {
    const min = options[0];
    const max = options[options.length - 1];

    return (
        <div>
            <p className="font-bold">{questionText}</p>
            <div className="px-2">
                <Slider
                    data-testid="slider-with-label-form"
                    className="pt-4 text-gray-500"
                    defaultValue={[formState[questionText][0].value]}
                    value={[formState[questionText][0].value]}
                    onValueChange={(value) => {
                        setFormState({
                            ...formState,
                            [questionText]: [{ value: value[0] }],
                        });
                    }}
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

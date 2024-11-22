import { useEffect, useState } from "react";

import { DualRangeSlider, DualRangeSliderProps } from "../ui/slider";
import { FormState, Question } from "./FormRenderer";

// prettier-ignore
export type DoubleSliderWithLabelFormProps =
    Omit<Question, "questiontype" | "dataType"> &
    FormState;

export const DoubleSliderWithLabelForm = ({
    questionText,
    options,
    formState,
    setFormState,
}: DoubleSliderWithLabelFormProps) => {
    const min = options[0];
    const max = options[options.length - 1];

    const [value, setValue] = useState<number[]>([min.value, max.value]);

    return (
        <div>
            <p className="font-bold">{questionText}</p>
            <div className="px-2">
                <DualRangeSlider
                    className="pt-4 pb-10 text-gray-500"
                    labelPosition="bottom"
                    defaultValue={[min.value, max.value]}
                    value={[...value]}
                    min={min.value}
                    max={max.value}
                    onValueChange={(value) => {
                        setValue(value);
                        setFormState({
                            ...formState,
                            [questionText]: [{ value: value }],
                        });
                    }}
                    label={(value) => (
                        <span className="text-sm text-gray-500">
                            {options.find((option) => option.value === value)?.label}
                        </span>
                    )}
                />
            </div>
        </div>
    );
};

import { useEffect, useState } from "react";

import { DualRangeSlider, Slider } from "@/components/ui/slider";

export interface SliderWithLabelFormProps {
    label: string;
    minLabel: string;
    maxLabel: string;

    minValue: number;
    maxValue: number;
    step: number;

    onChange: (value: number[]) => void;
}

export const SliderWithLabelForm = ({
    label,
    minLabel,
    maxLabel,
    minValue,
    maxValue,
    step,
    onChange,
}: SliderWithLabelFormProps) => {
    const [sliderValue, setSliderValue] = useState<number[]>([3]);

    useEffect(
        function onSliderValueChange() {
            onChange(sliderValue);
        },
        [sliderValue],
    );

    return (
        <div>
            <p className="font-bold">{label}</p>
            <div className="px-2">
                <Slider
                    className="pt-4 text-gray-500"
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    min={minValue}
                    max={maxValue}
                    step={step}
                />
                <div className="flex justify-between my-1">
                    <span className="text-sm text-gray-500">{minLabel}</span>
                    <span className="text-sm text-gray-500">{maxLabel}</span>
                </div>
            </div>
        </div>
    );
};

export interface DoubleSliderWithLabelFormProps {
    label: string;
    labelCallback: (value?: number) => React.ReactNode;

    value: number[];
    onValueChange: (value: number[]) => void;

    min: number;
    max: number;
    step: number;
    defaultValue: number[];
}

export const DoubleSliderWithLabelForm = ({
    label,
    labelCallback,
    value,
    onValueChange,

    min,
    max,
    step,
    defaultValue,
}: DoubleSliderWithLabelFormProps) => {
    return (
        <div>
            <p className="font-bold">{label}</p>
            <div className="px-2">
                <DualRangeSlider
                    className="pt-4 pb-10 text-gray-500"
                    label={labelCallback}
                    labelPosition="bottom"
                    value={value}
                    onValueChange={onValueChange}
                    min={min}
                    max={max}
                    step={step}
                    defaultValue={defaultValue}
                />
            </div>
        </div>
    );
};
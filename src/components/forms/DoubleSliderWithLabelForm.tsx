import { DualRangeSlider, DualRangeSliderProps } from "../ui/slider";

export interface DoubleSliderWithLabelFormProps extends DualRangeSliderProps {
    formLabel: string;
}

export const DoubleSliderWithLabelForm = ({
    formLabel,
    ...dualRangeSliderProps
}: DoubleSliderWithLabelFormProps) => {
    return (
        <div>
            <p className="font-bold">{formLabel}</p>
            <div className="px-2">
                <DualRangeSlider
                    className="pt-4 pb-10 text-gray-500"
                    labelPosition="bottom"
                    {...dualRangeSliderProps}
                />
            </div>
        </div>
    );
};

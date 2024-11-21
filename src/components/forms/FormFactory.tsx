import { CheckBoxWithLabelForm } from "./CheckBoxWithLabelForm";
import { QuestionTypes } from "./Form";
import { SelectorWithLabelForm } from "./SelectorWithLabelForm";
import { DoubleSliderWithLabelForm, SliderWithLabelForm } from "./SliderWithLabelForm";

export interface FormFactoryProps {
    questionType: keyof typeof QuestionTypes;
}

export const FormFactory = ({ questionType }: FormFactoryProps) => {
    const FormElements = {
        [QuestionTypes.selector]: SelectorWithLabelForm,
        [QuestionTypes.slider]: SliderWithLabelForm,
        [QuestionTypes.doubleSlider]: DoubleSliderWithLabelForm,
        [QuestionTypes.checkbox]: CheckBoxWithLabelForm,
    };

    return FormElements[questionType];
};

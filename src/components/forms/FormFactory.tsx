import { CheckBoxWithLabelForm } from "./CheckBoxWithLabelForm";
import { QuestionTypes } from "./FormRenderer";
import { SelectorWithLabelForm } from "./SelectorWithLabelForm";

export interface FormFactoryProps {
    questionType: keyof typeof QuestionTypes;
}

export const FormFactory = ({ questionType }: FormFactoryProps) => {
    const FormElements = {
        [QuestionTypes.selector]: SelectorWithLabelForm,
        [QuestionTypes.checkbox]: CheckBoxWithLabelForm,
        // [QuestionTypes.slider]: SliderWithLabelForm,
        // [QuestionTypes.doubleSlider]: DoubleSliderWithLabelForm,
    };

    return FormElements[questionType];
};

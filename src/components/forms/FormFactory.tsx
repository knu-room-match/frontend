import { CheckBoxWithLabelForm } from "./CheckBoxWithLabelForm";
import { DoubleSliderWithLabelForm } from "./DoubleSliderWithLabelForm";
import { QuestionTypes } from "./FormRenderer";
import { SelectorWithLabelForm } from "./SelectorWithLabelForm";
import { SliderWithLabelForm } from "./SliderWithLabelForm";

export const FormItemType = {
    selector: "selector",
    checkbox: "checkbox",
    slider: "slider",
    doubleSlider: "doubleSlider",
} as const;

export type FormItemType = keyof typeof FormItemType;

export type FormItemMap = {
    [key in FormItemType]: (props: any) => JSX.Element;
};

export class FormItemFactory {
    static readonly formElementMap: FormItemMap = {
        [QuestionTypes.selector]: SelectorWithLabelForm,
        [QuestionTypes.checkbox]: CheckBoxWithLabelForm,
        [QuestionTypes.slider]: SliderWithLabelForm,
        [QuestionTypes.doubleSlider]: DoubleSliderWithLabelForm,
    };

    public static createFormItem(itemType: FormItemType) {
        return this.formElementMap[itemType];
    }
}

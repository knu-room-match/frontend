export const FormTypeMap = {
    checkbox: "checkbox",
    selector: "selector",
    // slider: "slider",
    // doubleSlider: "doubleSlider",
} as const;

export type FormType = keyof typeof FormTypeMap;

export type FormOption = {
    label?: string;
    value: any;
};

/**
 * formTitle : 각 질문마다
 */
export interface createFormItemOptions {
    formTitle: string;
    formType: FormType;
    dataType: string;
    options: FormOption[];
}

export interface IFormItemFactory {
    // createFormItem({ formType }): React.ComponentType;
}

export class FormFactory implements IFormItemFactory {
    public static createFormComponent() {}
}

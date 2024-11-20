import { Checkbox } from "@/components/ui/checkbox";

export type CheckBoxItem = {
    id: string;
    label: string;
};

export interface RadioWithLabelFormProps {
    label: string;
    items: CheckBoxItem[];
}

export const RadioWithLabelForm = ({ label, items }: RadioWithLabelFormProps) => {
    return (
        <div className="flex flex-col gap-1">
            <p className="font-bold">{label}</p>

            {items.map((item) => {
                return (
                    <div className="flex items-center gap-1">
                        <Checkbox id={item.id} className="block w-5 h-5" />
                        <label htmlFor={item.id}>{item.label}</label>
                    </div>
                );
            })}
        </div>
    );
};

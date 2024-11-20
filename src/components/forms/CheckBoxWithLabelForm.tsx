import { useEffect, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";

export type CheckBoxItem = {
    id: string;
    label: string;
};

export interface RadioWithLabelFormProps {
    label: string;
    items: CheckBoxItem[];
    onCheckedValuesChange?: (checkedIds: string[]) => void;
}

export const CheckBoxWithLabelForm = ({
    label,
    items,
    onCheckedValuesChange,
}: RadioWithLabelFormProps) => {
    const [checked, setChecked] = useState<string[]>([]);

    useEffect(() => {
        onCheckedValuesChange && onCheckedValuesChange(checked);
    }, [checked]);

    return (
        <div className="flex flex-col gap-1">
            <p className="font-bold">{label}</p>

            {items.map((item) => {
                return (
                    <div className="flex items-center gap-1">
                        <Checkbox
                            id={item.id}
                            className="block w-5 h-5"
                            checked={checked.includes(item.id)}
                            onCheckedChange={(isChecked) => {
                                if (isChecked) setChecked([...checked, item.id]);
                                else setChecked(checked.filter((id) => id !== item.id));
                            }}
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                    </div>
                );
            })}
        </div>
    );
};

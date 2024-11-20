import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { SelectProps } from "@radix-ui/react-select";

export type SelectorItem = {
    value: string;
    label: string;
};

export interface SelectorProps extends SelectProps {
    label: string;
    items: SelectorItem[];
    placeholder: string;
}

export const SelectorWithLabelForm = ({
    label,
    items,
    placeholder,
    ...selectProps
}: SelectorProps) => {
    return (
        <div>
            <p className="py-1 font-bold">{label}</p>
            <Select {...selectProps}>
                <SelectTrigger className="w-full rounded-xl">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {items.map((item, index) => {
                        return (
                            <SelectItem key={index} value={item.value}>
                                {item.label}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
};

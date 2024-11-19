import { House, Users } from "lucide-react";

import { MatchStatus } from "@/pages/match/MatchListPage";

import bgMain from "@/assets/bg__main.webp";

export interface MatchListItemProps {
    title: string;
    dormitory: string;
    description: string;

    currentQuota: number;
    maxQuota: number;
}

export const MatchListItem = ({
    title,
    description,
    dormitory,
    currentQuota,
    maxQuota,
}: MatchListItemProps) => {
    return (
        <li className="list-none border-b-[1px] p-3 hover:cursor-pointer">
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="text-sm text-gray-800 line-clamp-1">{description}</p>
            <div className="flex justify-end gap-3 py-1 text-gray-500">
                <p className="flex items-center gap-1 text-sm">
                    <House size={14} />
                    <span>{dormitory}</span>
                </p>
                <p className="flex items-center gap-1 text-sm">
                    <Users size={14} />
                    <span>
                        {currentQuota}/{maxQuota}
                    </span>
                </p>
            </div>
        </li>
    );
};

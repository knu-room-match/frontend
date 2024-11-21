import { useSelector } from "react-redux";

import { House, Users } from "lucide-react";
import { Drawer } from "vaul";

import { RootState } from "@/apps/store/store";

import { Button } from "@/components/ui/button";

import { ParticipatingUserCardList } from "./ParticipatingUserCardList";

export interface MatchListItemProps extends React.ComponentProps<"li"> {
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
    const isParticipated = useSelector((state: RootState) => state.auth.isParticipated);

    return (
        <Drawer.Root>
            <Drawer.Trigger className="list-none border-b-[1px] p-3 hover:cursor-pointer w-full">
                <h1 className="text-lg font-bold text-left line-clamp-1">{title}</h1>
                <p className="text-sm text-left text-gray-800 line-clamp-1">{description}</p>
                <div className="flex justify-start gap-3 py-1 text-gray-500">
                    <p className="flex items-center gap-1 text-xs">
                        <House size={14} />
                        <span>{dormitory}</span>
                    </p>
                    <p className="flex items-center gap-1 text-xs">
                        <Users size={14} />
                        <span>
                            {currentQuota}/{maxQuota}
                        </span>
                    </p>
                </div>
            </Drawer.Trigger>

            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40" />
                <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none z-50">
                    <div className="p-3 bg-white rounded-t-[10px] flex-1">
                        <div
                            aria-hidden
                            className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-2"
                        />
                        <div className="max-w-[600px] mx-auto px-4 py-2">
                            <Drawer.Title className="mb-4 text-gray-900">
                                <div className="text-lg font-bold">{title}</div>
                                <div className="flex gap-2">
                                    <p className="flex items-center">
                                        <Users size={14} className="mr-1" />
                                        <span className="text-sm">
                                            {currentQuota}/{maxQuota}
                                        </span>
                                    </p>
                                    <p className="flex items-center">
                                        <House size={14} className="mr-1" />
                                        <span className="text-sm">{dormitory}</span>
                                    </p>
                                </div>
                            </Drawer.Title>
                            <p className="mb-4 text-gray-600">{description}</p>

                            <div className="my-2">
                                <ParticipatingUserCardList
                                    users={[
                                        { id: 1, index: 1, nickname: "김철수", status: "ACCEPTED" },
                                        { id: 2, index: 2, nickname: "홍길동", status: "PENDING" },
                                        { id: 3, index: 3, nickname: "이영희", status: "PENDING" },
                                    ]}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <Button
                                    variant="default"
                                    className="w-full"
                                    disabled={isParticipated}
                                >
                                    {!isParticipated
                                        ? "채팅하기"
                                        : "이미 참여중인 채팅방이 있습니다"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

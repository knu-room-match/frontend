import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useRemoveSearchParams } from "@/common/hooks/useRemoveSearchParams";
import { MatchListItem } from "@/domains/match/components/MatchListItem";

export enum MatchStatus {
    PENDING = "PENDING",
    MATCHING = "MATCHING",
    MATCHED = "MATCHED",
}

export default function MatchListPage() {
    useRemoveSearchParams();

    return (
        <div>
            <div className="fixed bottom-8 right-8">
                <Button className="rounded-full ">
                    <Plus size={20} />
                    룸메이트 구하기
                </Button>
            </div>

            {Array.from({ length: 15 }).map(() => {
                return (
                    <MatchListItem
                        title={"조용하고 청결한 룸메이트 구해요"}
                        dormitory={"첨성관"}
                        description="조용하고 청결한 룸메이트를 구합니다. 학교 근처에 있으면 좋겠어요. MBTI 는 I 를 선호합니다."
                        currentQuota={1}
                        maxQuota={4}
                    />
                );
            })}
        </div>
    );
}

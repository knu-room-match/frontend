import { useState } from "react";

import { SelectorWithLabelForm } from "@/components/forms/SelectorWithLabelForm";
import { SliderWithLabelForm } from "@/components/forms/SliderWithLabelForm";
import { Button } from "@/components/ui/button";

import { useSection } from "@/common/hooks/useSection";

export default function RegisterInfoRelationSection() {
    const { nextSection, prevSection } = useSection();

    const [relationShip, setRelationShip] = useState([3]);

    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <h1 className="my-2 text-2xl font-bold">생활 및 관계</h1>

                <SliderWithLabelForm
                    label="룸메이트와의 관계"
                    minLabel="학교사람"
                    maxLabel="절친"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    onChange={(value) => setRelationShip(value)}
                />

                <SelectorWithLabelForm
                    label="룸메이트와 물건공유"
                    placeholder="룸메이트와 물건공유 여부를 선택해주세요"
                    items={[
                        { value: "hate", label: "싫다" },
                        { value: "approve", label: "사전허락" },
                        { value: "regardless", label: "상관없음" },
                    ]}
                />

                <SelectorWithLabelForm
                    label="친구초대"
                    placeholder="친구초대 옵션을 선택해주세요"
                    items={[
                        { value: "regardless", label: "상관없음" },
                        { value: "acquaintance", label: "아는사람만" },
                        { value: "approve", label: "사전허락" },
                        { value: "싫음", label: "hate" },
                    ]}
                />

                <SelectorWithLabelForm
                    label="본가 방문주기"
                    placeholder="본가 방문주기를 선택해주세요"
                    items={[
                        { value: "vacation", label: "방학만" },
                        { value: "weekly", label: "주말마다" },
                        { value: "2weekly", label: "2주마다" },
                        { value: "monthly", label: "매달" },
                    ]}
                />
            </div>

            <div className="z-10 flex w-full gap-2 mt-10 mb-2">
                <Button className="w-full" variant="outline" onClick={() => prevSection()}>
                    이전
                </Button>
                <Button className="w-full" onClick={() => nextSection()}>
                    다음
                </Button>
            </div>
        </div>
    );
}

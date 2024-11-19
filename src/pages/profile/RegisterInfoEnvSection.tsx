import { useState } from "react";

import { SelectorWithLabelForm } from "@/components/common/forms/SelectorWithLabelForm";
import { SliderWithLabelForm } from "@/components/common/forms/SliderWithLabelForm";
import { Button } from "@/components/ui/button";

import { useSection } from "@/hooks/useSection";

export interface RegisterInfoEnvType {
    heat: number[];
    setHeat: React.Dispatch<React.SetStateAction<number[]>>;

    cold: number[];
    setCold: React.Dispatch<React.SetStateAction<number[]>>;

    dirty: number[];
    setDirty: React.Dispatch<React.SetStateAction<number[]>>;

    cleanCycle: string;
    setCleanCycle: React.Dispatch<React.SetStateAction<string>>;

    showerDuration: string;
    setShowerDuration: React.Dispatch<React.SetStateAction<string>>;

    bug: string;
    setBug: React.Dispatch<React.SetStateAction<string>>;
}

export default function RegisterInfoEnvSection() {
    const { prevSection, nextSection } = useSection();

    const [heat, setHeat] = useState([3]);
    const [cold, setCold] = useState([3]);
    const [dirty, setDirty] = useState([3]);

    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <h1 className="my-2 text-2xl font-bold">생활습관</h1>

                <SliderWithLabelForm
                    label="더위"
                    minLabel="적게탐"
                    maxLabel="많이탐"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    onChange={setHeat}
                />

                <SliderWithLabelForm
                    label="추위"
                    minLabel="적게탐"
                    maxLabel="많이탐"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    onChange={setCold}
                />

                <SliderWithLabelForm
                    label="더러움"
                    minLabel="더러움"
                    maxLabel="깨끗함"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    onChange={setDirty}
                />

                <SelectorWithLabelForm
                    label="청소주기"
                    placeholder="청소 주기를 선택해주세요"
                    items={[
                        { value: "weekly", label: "주 1회" },
                        { value: "3-4times", label: "주 3~4회" },
                        { value: "daily", label: "매일" },
                    ]}
                />

                <SelectorWithLabelForm
                    label="샤워 소요시간"
                    placeholder="평균 샤워 소요시간을 선택해주세요"
                    items={[
                        { value: "5min", label: "5분" },
                        { value: "10min", label: "10분" },
                        { value: "15min", label: "15분" },
                        { value: "20min", label: "20분" },
                        { value: "25min", label: "25분" },
                        { value: "30min", label: "30분" },
                        { value: "40min", label: "40분 이상" },
                    ]}
                />

                <SelectorWithLabelForm
                    label="벌레"
                    placeholder="벌레에 대한 민감도를 선택해주세요"
                    items={[
                        { value: "hate", label: "극혐" },
                        { value: "dislike", label: "못잡음" },
                        { value: "mid", label: "중간" },
                        { value: "catch", label: "잘잡음" },
                        { value: "hate", label: "싫어함" },
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

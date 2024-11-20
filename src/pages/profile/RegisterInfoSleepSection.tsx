import { useState } from "react";
import { useDispatch } from "react-redux";

import { registerInfoActions } from "@/apps/store/register-info.slice";
import { RootDispatch } from "@/apps/store/store";

import { CheckBoxWithLabelForm } from "@/components/forms/CheckBoxWithLabelForm";
import { SelectorWithLabelForm } from "@/components/forms/SelectorWithLabelForm";
import { DoubleSliderWithLabelForm } from "@/components/forms/SliderWithLabelForm";
import { Button } from "@/components/ui/button";

import { useSection } from "@/common/hooks/useSection";

export default function RegisterInfoSleepSection() {
    const [wakeUpTime, setWakeUpTime] = useState([4, 12]);
    const [sleepTime, setSleepTime] = useState([21, 29]);
    const [sleepNoiseResist, setSleepNoiseResist] = useState([3]);

    const { prevSection, nextSection } = useSection();

    const dispatch: RootDispatch = useDispatch();

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
                <h1 className="my-2 text-2xl font-bold">수면습관</h1>
                <DoubleSliderWithLabelForm
                    label="기상시간"
                    labelCallback={(value) => (
                        <span className="my-1 text-sm text-nowrap">{value}시</span>
                    )}
                    value={wakeUpTime}
                    onValueChange={(value) =>
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                wakeUpTime: value,
                            }),
                        )
                    }
                    min={4}
                    max={12}
                    step={1}
                    defaultValue={[4, 12]}
                />

                <DoubleSliderWithLabelForm
                    label="취침시간"
                    labelCallback={(value) => {
                        if (!value) return;
                        return (
                            <span className="my-1 text-sm text-nowrap">
                                {value < 24 ? value : value - 24}시
                            </span>
                        );
                    }}
                    value={sleepTime}
                    onValueChange={(value) =>
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                sleepTime: value,
                            }),
                        )
                    }
                    min={21}
                    max={29}
                    step={1}
                    defaultValue={[21, 29]}
                />

                <SelectorWithLabelForm
                    label="잠귀"
                    placeholder="잠귀를 선택해주세요"
                    items={[
                        { label: "밝음", value: "bright" },
                        { label: "보통", value: "normal" },
                        { label: "어두움", value: "dark" },
                    ]}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                sleepNoiseResist: value,
                            }),
                        );
                    }}
                />

                <SelectorWithLabelForm
                    label="수면등"
                    placeholder="수면등을 선택해주세요"
                    items={[
                        { label: "없음", value: "none" },
                        { label: "수면등", value: "sleeplight" },
                        { label: "스탠드", value: "stand" },
                    ]}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                sleepLight: value,
                            }),
                        );
                    }}
                />

                <SelectorWithLabelForm
                    label="알람설정"
                    placeholder="알람 설정을 선택해주세요"
                    items={[
                        { label: "없음", value: "none" },
                        { label: "10분 마다", value: "every10min" },
                        { label: "한번만", value: "once" },
                    ]}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                alarmSetting: value,
                            }),
                        );
                    }}
                />

                <CheckBoxWithLabelForm
                    label="잠버릇"
                    items={[
                        { id: "sleep-habit__teeth", label: "이갈이" },
                        { id: "sleep-habit__nose", label: "코골이" },
                        { id: "sleep-habit__sleeptalking", label: "잠꼬대" },
                        { id: "sleep-habit__wriggle", label: "몸부림" },
                    ]}
                    onCheckedValuesChange={(checkedIds) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                sleepHabit: checkedIds,
                            }),
                        );
                    }}
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

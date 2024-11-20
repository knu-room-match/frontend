import { useDispatch, useSelector } from "react-redux";

import { registerInfoActions } from "@/apps/store/register-info.slice";
import { RootDispatch, RootState } from "@/apps/store/store";

import { SelectorWithLabelForm } from "@/components/forms/SelectorWithLabelForm";
import { SliderWithLabelForm } from "@/components/forms/SliderWithLabelForm";
import { Button } from "@/components/ui/button";

import { useSection } from "@/common/hooks/useSection";

export default function RegisterInfoEnvSection() {
    const { prevSection, nextSection } = useSection();

    const dispatch: RootDispatch = useDispatch();
    const registerInfo = useSelector((state: RootState) => state.registerInfo);

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
                    value={registerInfo.heat}
                    onChange={(value) =>
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                heat: value,
                            }),
                        )
                    }
                />

                <SliderWithLabelForm
                    label="추위"
                    minLabel="적게탐"
                    maxLabel="많이탐"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    value={registerInfo.cold}
                    onChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                cold: value,
                            }),
                        );
                    }}
                />

                <SliderWithLabelForm
                    label="더러움"
                    minLabel="더러움"
                    maxLabel="깨끗함"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    value={registerInfo.dirty}
                    onChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                dirty: value,
                            }),
                        );
                    }}
                />

                <SelectorWithLabelForm
                    label="청소주기"
                    placeholder="청소 주기를 선택해주세요"
                    items={[
                        { value: "weekly", label: "주 1회" },
                        { value: "3-4times", label: "주 3~4회" },
                        { value: "daily", label: "매일" },
                    ]}
                    value={registerInfo.cleanCycle}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                cleanCycle: value,
                            }),
                        );
                    }}
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
                    value={registerInfo.showerDuration}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                showerDuration: value,
                            }),
                        );
                    }}
                />

                <SelectorWithLabelForm
                    label="벌레"
                    placeholder="벌레에 대한 민감도를 선택해주세요"
                    items={[
                        { value: "hate", label: "극혐" },
                        { value: "dislike", label: "못잡음" },
                        { value: "mid", label: "중간" },
                        { value: "catch", label: "잘잡음" },
                        { value: "like", label: "좋아함" },
                    ]}
                    value={registerInfo.bug}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                bug: value,
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

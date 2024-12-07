import { useDispatch, useSelector } from "react-redux";

import { registerInfoActions } from "@/apps/store/register-info.slice";
import { RootDispatch, RootState } from "@/apps/store/store";

import { SelectorWithLabelForm } from "@/components/forms/SelectorWithLabelForm";
import { Button } from "@/components/ui/button";

import { useSection } from "@/common/hooks/useSection";

export default function RegisterInfoHobbySection() {
    const { prevSection, nextSection } = useSection();

    const dispatch: RootDispatch = useDispatch();
    const registerInfo = useSelector((state: RootState) => state.registerInfo);

    return (
        <div className="flex flex-col justify-between h-full bg-white">
            <div>
                <h1 className="my-2 text-2xl font-bold">취미 및 활동</h1>

                <SelectorWithLabelForm
                    label="공부장소"
                    placeholder="공부장소를 선택해주세요"
                    items={[
                        { value: "dormitory", label: "기숙사" },
                        { value: "library", label: "도서관" },
                        { value: "studyroom", label: "자습실" },
                    ]}
                    value={registerInfo.studyArea}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                studyArea: value,
                            }),
                        );
                    }}
                />

                <SelectorWithLabelForm
                    label="운동빈도"
                    placeholder="운동빈도를 선택해주세요"
                    items={[
                        { value: "none", label: "안함" },
                        { value: "sometimes", label: "가끔" },
                        { value: "often", label: "자주" },
                        { value: "daily", label: "매일" },
                    ]}
                    value={registerInfo.workoutFrequency}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                workoutFrequency: value,
                            }),
                        );
                    }}
                />

                <SelectorWithLabelForm
                    label="운동 시간대"
                    placeholder="운동 시간대를 선택해주세요"
                    items={[
                        { value: "none", label: "안함" },
                        { value: "morning", label: "아침" },
                        { value: "afternoon", label: "오후" },
                        { value: "evening", label: "저녁" },
                        { value: "night", label: "밤" },
                    ]}
                    value={registerInfo.workoutTime}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                workoutTime: value,
                            }),
                        );
                    }}
                />

                <SelectorWithLabelForm
                    label="게임"
                    placeholder="게임빈도를 선택해주세요"
                    items={[
                        { value: "none", label: "안함" },
                        { value: "sometimes", label: "가끔" },
                        { value: "often", label: "자주" },
                        { value: "daily", label: "매일" },
                    ]}
                    value={registerInfo.gameType}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                gameType: value,
                            }),
                        );
                    }}
                />

                <SelectorWithLabelForm
                    label="음주"
                    placeholder="음주빈도를 선택해주세요"
                    items={[
                        { value: "none", label: "안함" },
                        { value: "sometimes", label: "가끔" },
                        { value: "often", label: "자주" },
                        { value: "daily", label: "매일" },
                    ]}
                    value={registerInfo.alcohol}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                alcohol: value,
                            }),
                        );
                    }}
                />

                <SelectorWithLabelForm
                    label="흡연"
                    placeholder="흡연여부를 선택해주세요"
                    items={[
                        { value: "none", label: "안함" },
                        { value: "ecigar", label: "전자담배" },
                        { value: "cigar", label: "연초" },
                    ]}
                    value={registerInfo.smoking}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                smoking: value,
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

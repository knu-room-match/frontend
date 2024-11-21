import { useDispatch, useSelector } from "react-redux";

import { registerInfoActions } from "@/apps/store/register-info.slice";
import { RootDispatch, RootState } from "@/apps/store/store";

import { SelectorWithLabelForm } from "@/components/forms/SelectorWithLabelForm";
import { SliderWithLabelForm } from "@/components/forms/SliderWithLabelForm";
import { Button } from "@/components/ui/button";

import { useSection } from "@/common/hooks/useSection";

export default function RegisterInfoRelationSection() {
    const { nextSection, prevSection } = useSection();

    const dispatch: RootDispatch = useDispatch();
    const registerInfo = useSelector((state: RootState) => state.registerInfo);

    return (
        <div className="flex flex-col justify-between h-full bg-white">
            <div>
                <h1 className="my-2 text-2xl font-bold">생활 및 관계</h1>

                <SliderWithLabelForm
                    label="룸메이트와의 관계"
                    minLabel="학교사람"
                    maxLabel="절친"
                    minValue={1}
                    maxValue={5}
                    step={1}
                    value={registerInfo.roomMateRelation}
                    onChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                roomMateRelation: value,
                            }),
                        );
                    }}
                />

                <SelectorWithLabelForm
                    label="룸메이트와 물건공유"
                    placeholder="룸메이트와 물건공유 여부를 선택해주세요"
                    items={[
                        { value: "hate", label: "싫다" },
                        { value: "approval", label: "사전허락" },
                        { value: "regardless", label: "상관없음" },
                    ]}
                    value={registerInfo.roomMateShare}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                roomMateShare: value,
                            }),
                        );
                    }}
                />

                <SelectorWithLabelForm
                    label="친구초대"
                    placeholder="친구초대 옵션을 선택해주세요"
                    items={[
                        { value: "regardless", label: "상관없음" },
                        { value: "acquaintance", label: "아는사람만" },
                        { value: "approval", label: "사전허락" },
                        { value: "싫음", label: "hate" },
                    ]}
                    value={registerInfo.friendsInvitation}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                friendsInvitation: value,
                            }),
                        );
                    }}
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
                    value={registerInfo.returnHomeFrequency}
                    onValueChange={(value) => {
                        dispatch(
                            registerInfoActions.setRegisterInfo({
                                returnHomeFrequency: value,
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

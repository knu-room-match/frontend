// import { useNavigate } from "react-router-dom";
import { useFlow } from "@/apps/stackflow";

import { Button } from "@/components/ui/button";

import bgMain from "@/assets/bg__main.webp";

import { AppScreen } from "@stackflow/plugin-basic-ui";

export default function HomePage() {
    const { replace } = useFlow();

    return (
        <AppScreen>
            <div className="screen">
                <img
                    className="absolute top-0 z-0 object-cover w-full h-full"
                    src={bgMain}
                    alt="bg__main"
                />
                <div className="absolute z-10 w-full h-full bg-[#00000080]"></div>
                <div className="absolute z-10 flex flex-col justify-between w-full h-full p-6">
                    <div className="flex flex-col items-center my-40">
                        <h1 className="text-5xl font-bold text-white">KNU ROOM</h1>
                        <h1 className="text-5xl font-bold text-white">MATCH</h1>
                        <div className="border-white border-[1px] w-[70%] my-4" />
                        <p className="text-white">경북대학교 룸메이트 매칭 서비스</p>
                    </div>
                    <div className="flex flex-col gap-3 mb-6">
                        <Button variant="default" onClick={() => replace("MatchListPage")}>
                            로그인
                        </Button>
                        <Button variant="outline" onClick={() => undefined}>
                            룸메이트 둘러보기
                        </Button>
                    </div>
                </div>
            </div>
        </AppScreen>
    );
}

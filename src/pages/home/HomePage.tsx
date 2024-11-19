import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

import bgMain from "@/assets/bg__main.webp";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="relative w-full max-w-[600px] h-[100dvh] mx-auto">
            <img
                className="absolute top-0 z-0 object-cover w-full h-full"
                src={bgMain}
                alt="bg__main"
            />
            <div className="absolute z-10 w-full h-full bg-[#00000080]"></div>
            <div className="absolute z-10 flex flex-col justify-between w-full h-full p-6 my-4">
                <div className="flex flex-col items-center my-40">
                    <h1 className="text-5xl font-bold text-white">KNU ROOM</h1>
                    <h1 className="text-5xl font-bold text-white">MATCH</h1>
                    <div className="border-white border-[1px] w-[70%] my-4" />
                    <p className="text-white">경북대학교 룸메이트 매칭 서비스</p>
                </div>
                <div className="flex flex-col gap-3 mb-6">
                    <Button variant="default" onClick={() => navigate("/auth/signin")}>
                        로그인
                    </Button>
                    <Button variant="outline" onClick={() => navigate("/match")}>
                        룸메이트 둘러보기
                    </Button>
                </div>
            </div>
        </div>
    );
}

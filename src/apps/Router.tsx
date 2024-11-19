import { createRoutesFromChildren, Route } from "react-router-dom";

import { RootLayout } from "@/components/layouts/RootLayout";

import HomePage from "@/pages/home/HomePage";
import MatchListPage from "@/pages/match/MatchListPage";
import RegisterInfoPage from "@/pages/profile/RegisterInfoPage";

export const router = createRoutesFromChildren(
    <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/" element={<RootLayout />}>
            <Route path="/match" element={<MatchListPage />} />
            <Route path="/profile/me/register" element={<RegisterInfoPage />} />
        </Route>
    </Route>,
);

import { createRoutesFromChildren, Route } from "react-router-dom";

import { RootLayout } from "@/components/layouts/RootLayout";

import HomePage from "@/pages/home/HomePage";

export const router = createRoutesFromChildren(
    <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/" element={<RootLayout />}></Route>
    </Route>,
);

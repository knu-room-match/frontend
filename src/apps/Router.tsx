import { createRoutesFromChildren, Route } from "react-router-dom";

import HomePage from "@/pages/home";

import { RootLayout } from "@/layouts/RootLayout";

export const router = createRoutesFromChildren(
    <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
    </Route>,
);

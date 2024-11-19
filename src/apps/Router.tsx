import { createRoutesFromChildren, Route } from "react-router-dom";

import { RootLayout } from "@/components/layouts/RootLayout";

import HomePage from "@/pages/home/HomePage";

export const router = createRoutesFromChildren(
    <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
    </Route>,
);

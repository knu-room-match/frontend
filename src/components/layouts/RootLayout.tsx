import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export const RootLayout = () => {
    return (
        <Fragment>
            <main className="w-full max-w-[600px] h-[100dvh] mx-auto border-[1px] p-6">
                <Outlet />
            </main>
        </Fragment>
    );
};

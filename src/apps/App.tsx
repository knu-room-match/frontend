import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { router } from "./Router";
import { store } from "./store/store";
import "./styles/tailwind.css";
import "./styles/transitions.css";

export default function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={createBrowserRouter(router)} />
        </Provider>
    );
}

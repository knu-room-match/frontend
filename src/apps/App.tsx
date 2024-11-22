import { Provider } from "react-redux";

import { Stack } from "./stackflow";
import { store } from "./store/store";
import "./styles/tailwind.css";

export default function App() {
    return (
        <Provider store={store}>
            <main className="w-full max-w-[500px] mx-auto h-screen border-[1px]">
                <Stack />
            </main>
        </Provider>
    );
}

import { createRoot } from "react-dom/client";

import App from "@/apps/App.tsx";

import "@stackflow/plugin-basic-ui/index.css";

createRoot(document.getElementById("root")!).render(<App />);

import { createRoot } from "react-dom/client";

import App from "@/apps/App.tsx";
import "@/apps/styles/tailwind.css";

createRoot(document.getElementById("root")!).render(<App />);

import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/bungee";
import "@fontsource/reenie-beanie";
import "@fontsource-variable/bricolage-grotesque";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

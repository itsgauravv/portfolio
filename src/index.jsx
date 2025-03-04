import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HeroUIProvider>
    <ToastProvider />
    <App />
  </HeroUIProvider>
);

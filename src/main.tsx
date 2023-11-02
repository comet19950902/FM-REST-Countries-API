import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CountiresContextProvider } from "@features/countries/CountiresContextProvider";
import { ThemeContextProvider } from "@features/ui/ThemeContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CountiresContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </CountiresContextProvider>
  </React.StrictMode>
);

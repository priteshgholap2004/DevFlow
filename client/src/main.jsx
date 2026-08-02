import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LayoutProvider } from "./context/LayoutContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
        <LayoutProvider>
            <App />
        </LayoutProvider>
    </AuthProvider>
</React.StrictMode>
);
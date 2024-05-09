import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </AuthContextProvider>
    </React.StrictMode>
);

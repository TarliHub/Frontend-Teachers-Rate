import { ReactNode, createContext } from "react";

import useCookie from "../hooks/useCookie";

interface AuthContextType {
    token: string;
    setToken: (token: string) => void;
    deleteToken: (token: string) => void;
    role: string;
    setRole: (role: string) => void;
    deleteRole: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
    token: "",
    setToken: () => {},
    deleteToken: () => {},
    role: "",
    setRole: () => {},
    deleteRole: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken, deleteToken] = useCookie("token", "");
    const [role, setRole, deleteRole] = useCookie("role", "");

    return (
        <AuthContext.Provider
            value={{ token, setToken, deleteToken, role, setRole, deleteRole }}
        >
            {children}
        </AuthContext.Provider>
    );
};

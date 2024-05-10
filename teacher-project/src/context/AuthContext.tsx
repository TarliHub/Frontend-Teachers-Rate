import { ReactNode, createContext } from "react";

import { useSession } from "../hooks/useSession";

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
    const [token, setToken, deleteToken] = useSession("token", "");
    const [role, setRole, deleteRole] = useSession("role", "");

    return (
        <AuthContext.Provider
            value={{ token, setToken, deleteToken, role, setRole, deleteRole }}
        >
            {children}
        </AuthContext.Provider>
    );
};

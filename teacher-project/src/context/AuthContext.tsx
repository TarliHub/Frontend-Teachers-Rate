import { ReactNode, createContext } from "react";

import { useSession } from "../hooks/useSession";

interface AuthContextType {
    token: string;
    setToken: (token: string) => void;
    deleteToken: () => void;
    role: number;
    setRole: (role: number) => void;
    deleteRole: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    token: "",
    setToken: () => {},
    deleteToken: () => {},
    role: 0,
    setRole: () => {},
    deleteRole: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken, deleteToken] = useSession<string>("token", "");
    const [role, setRole, deleteRole] = useSession<number>("role", 2);

    return (
        <AuthContext.Provider
            value={{ token, setToken, deleteToken, role, setRole, deleteRole }}
        >
            {children}
        </AuthContext.Provider>
    );
};

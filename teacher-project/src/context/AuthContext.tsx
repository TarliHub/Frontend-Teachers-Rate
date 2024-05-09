import { ReactNode, createContext, useReducer } from "react";
import { AuthContextType } from "../types/auth.types";
import { authReducer } from "../reducers/authReducer";

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    dispatch: () => {},
});

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

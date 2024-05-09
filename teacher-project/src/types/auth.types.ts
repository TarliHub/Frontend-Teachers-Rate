export interface ILoginFields {
    email: string;
    password: string;
}

export interface ICredentials {
    email: string;
    password: string;
}

export interface IUserData {
    name: string;
    email: string;
    password: string;
}

export interface User {
    userId: string;
    username: string;
    token: string;
}

export interface AuthState {
    user: User | null;
}

export type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

export interface AuthContextType {
    user: User | null;
    dispatch: React.Dispatch<AuthAction>;
}
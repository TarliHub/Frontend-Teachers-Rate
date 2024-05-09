export interface ILoginFields {
    email: string;
    password: string;
}

export interface IUserData {
    role: string;
    token: string;
}

export interface User {
    userId: string;
    username: string;
    token: string;
}

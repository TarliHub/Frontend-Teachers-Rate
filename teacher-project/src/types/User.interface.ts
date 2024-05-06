export interface IUsersList {
    pageIndex: number;
    pageSize: number;
    pagesCount: number;
    items: IUser[];
}

export interface IUser {
    surname?: string;
    name?: string;
    patronymic?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export interface IUserUpdate {
    id: number;
    lastName: string;
    login: string;
    name: string;
    password: string;
    role: number;
}

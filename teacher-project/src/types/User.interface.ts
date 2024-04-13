export interface IUsersList {
    pageIndex: number;
    pageSize: number;
    pagesCount: number;
    items: IUser[];
}

export interface IUser {
    id: number;
    lastName: string;
    login: string;
    name: string;
    password: string;
    rating: number;
    registeredAt: Date;
    role: number;
}

export interface IUserUpdate {
    id: number;
    lastName: string;
    login: string;
    name: string;
    password: string;
    role: number;
}

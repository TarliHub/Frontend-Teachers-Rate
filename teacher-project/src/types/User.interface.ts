export interface IUsersList {
    pageIndex: number;
    pageSize: number;
    pagesCount: number;
    items: IUser[];
}

export interface IUser {
    lastName: string;
    login: string;
    name: string;
    password: string;
    rating: number;
    registeredAt: Date;
    role: number;
}

export interface IUsersList {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    items: IUser[];
}

export interface IUser {
    id: number;
    lastName: string;
    name: string;
    middleName: string;
    email: string;
    createdAt: string;
    points: number;
    password?: string;
    confirmPassword?: string;
    headTeacher?: IUser;
}

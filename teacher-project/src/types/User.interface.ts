export interface IUsersList {
    page: number;
    size: number;
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
    headTeacher?: IUser;
}

export interface IUserFields {
    id?: number;
    lastName: string;
    name: string;
    middleName: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

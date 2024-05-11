export interface IUsersList {
    page: number;
    size: number;
    count: number;
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

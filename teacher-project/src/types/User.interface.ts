import { ITask } from "./Task.interface";

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
    role?: number;
    password?: string;
    confirmPassword?: string;
    commissionName?: string;
    teachers?: IUser[];
    headTeacher?: IUser;
    tasks: [
        {
            id: number;
            teacherId: number;
            task: ITask;
            points: number;
        }
    ];
}

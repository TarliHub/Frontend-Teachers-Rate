export interface ITask {
    id: number;
    title: string;
    pointsDescription: string;
    points: number[] | number;
    task: ITask;
    teacherId: number;
    approval: string;
    categoryId: number;
    category: {
        id: number;
        name: string;
    };
}

export interface ICompletedTask {
    id: number;
    teacherId: number;
    task: ITask;
    points: number;
}

export interface ISubmitTask {
    taskId: number;
    approvalLink: string;
    description: string;
    points: number;
}

export interface ITaskList {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
    items?: ITask[];
}

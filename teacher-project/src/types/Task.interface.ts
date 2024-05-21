export interface ITask {
    id: number;
    title: string;
    pointsDescription: string;
    points: number[];
    approval: string;
    categoryId: number;
    category: {
        id: number;
        name: string;
    };
}

export interface ITaskList {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
    items: ITask[];
}

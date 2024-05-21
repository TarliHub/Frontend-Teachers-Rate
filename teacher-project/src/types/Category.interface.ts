export interface ICategory {
    id: number;
    name: string;
}

export interface ICategoryList {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
    items: ICategory[];
}

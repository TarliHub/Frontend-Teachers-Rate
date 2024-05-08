import { useInfiniteQuery } from "@tanstack/react-query";
import DataProvider from "../providers/DataProvider";
import { IUsersList } from "../types/User.interface";

export const useUsersList = (route: string) => {
    return useInfiniteQuery({
        queryKey: ["users-list"],
        queryFn: async ({ pageParam }: { pageParam: number }) => {
            return await DataProvider.getList<IUsersList>(pageParam, route);
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            return allPages.length == lastPage.pagesCount
                ? undefined
                : +(lastPage.pageIndex + 1);
        },
        getPreviousPageParam: () => 0,
    });
};

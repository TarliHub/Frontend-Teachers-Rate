import { useInfiniteQuery } from "@tanstack/react-query";
import UserService from "../services/User.service";
import { IUsersList } from "../types/User.interface";

export const useUsersList = () => {
    return useInfiniteQuery({
        queryKey: ["users-list"],
        queryFn: async ({ pageParam }: { pageParam: number }) => {
            const result = await UserService.getUsersList(pageParam);
            return result as IUsersList;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage =
                allPages.length == lastPage.pageIndex
                    ? undefined
                    : +(lastPage.pageIndex + 1);
            return nextPage;
        },
        getPreviousPageParam: (firstPage) => {
            const previousPage =
                firstPage.pageIndex === 0 ? undefined : firstPage.pageIndex - 1;
            return previousPage;
        },
    });
};

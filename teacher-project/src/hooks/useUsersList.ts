import { useInfiniteQuery } from "@tanstack/react-query";
import UserService from "../services/User.service";

export const useUsersList = () => {
    return useInfiniteQuery({
        queryKey: ["users-list"],
        queryFn: async ({ pageParam }: { pageParam: number }) => {
            return await UserService.getUsersList(pageParam);
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

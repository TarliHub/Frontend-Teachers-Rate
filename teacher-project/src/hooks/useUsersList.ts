import { useInfiniteQuery } from "@tanstack/react-query";
import UserService from "../services/User.service";

export const useUsersList = () => {
    return useInfiniteQuery({
        queryKey: ["users-list"],
        queryFn: async ({ pageParam }: { pageParam: number }) => {
            const result = await UserService.getUsersList(pageParam);
            return result;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage =
                allPages.length == lastPage.pagesCount
                    ? undefined
                    : +(lastPage.pageIndex + 1);
            return nextPage;
        },
        getPreviousPageParam: () => 0,
    });
};

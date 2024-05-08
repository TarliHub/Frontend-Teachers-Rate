import { useQuery } from "@tanstack/react-query";
import DataProvider from "../providers/DataProvider";

export const useGetOne = <T>(id: number, route: string) => {
    return useQuery<T, Error>({
        queryKey: ["user"],
        queryFn: async () => {
            return await DataProvider.getOne<T>(id, route);
        },
    });
};

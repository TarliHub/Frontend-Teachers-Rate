import { useQuery } from "@tanstack/react-query";

import useCookie from "./useCookie";

import DataProvider from "../providers/DataProvider";

export const useGetOne = <T>(id: number, route: string) => {
    const token = useCookie("token", "")[0];

    return useQuery<T, Error>({
        queryKey: ["user"],
        queryFn: async () => {
            return await DataProvider.getOne<T>(id, route, token);
        },
    });
};

import { useQuery } from "@tanstack/react-query";

import DataProvider from "../providers/DataProvider";

import useCookie from "./useCookie";

export const useGetOne = <T>(id: number, route: string) => {
    const { token } = useCookie(["token"]);

    return useQuery<T, Error>({
        queryKey: ["user"],
        queryFn: async () => {
            return await DataProvider.getOne<T>(id, route, token);
        },
    });
};

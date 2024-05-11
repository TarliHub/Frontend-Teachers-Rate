import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import DataProvider from "../providers/DataProvider";

export const useList = <T>(route: string, page: number, key: string) => {
    const { token } = useContext(AuthContext);

    return useQuery({
        queryKey: [key, page],
        queryFn: async () => {
            return await DataProvider.getList<T>(page, route, token);
        },
        placeholderData: keepPreviousData,
    });
};

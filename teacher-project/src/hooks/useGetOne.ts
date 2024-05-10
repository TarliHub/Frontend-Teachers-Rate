import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import DataProvider from "../providers/DataProvider";

export const useGetOne = <T>(id: number, route: string) => {
    const { token } = useContext(AuthContext);

    return useQuery<T, Error>({
        queryKey: ["user"],
        queryFn: async () => {
            return await DataProvider.getOne<T>(id, route, token);
        },
    });
};

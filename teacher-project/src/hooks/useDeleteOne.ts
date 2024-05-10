import { useMutation, useQueryClient } from "@tanstack/react-query";

import useCookie from "./useCookie";

import DataProvider from "../providers/DataProvider";

export const useDeleteOne = <T>() => {
    const token = useCookie("token", "")[0];

    const queryClient = useQueryClient();

    return useMutation<T, Error, { id: number; route: string }>({
        mutationFn: async ({ id, route }) => {
            return await DataProvider.deleteOne<T>(id, route, token);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["users-list"] });
        },
    });
};

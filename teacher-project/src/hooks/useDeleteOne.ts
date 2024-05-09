import { useMutation, useQueryClient } from "@tanstack/react-query";

import DataProvider from "../providers/DataProvider";

import useCookie from "./useCookie";

export const useDeleteOne = <T>() => {
    const { token } = useCookie(["token"]);

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

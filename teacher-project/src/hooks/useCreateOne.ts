import { useMutation, useQueryClient } from "@tanstack/react-query";

import DataProvider from "../providers/DataProvider";

export const useCreateOne = <T>() => {
    const queryClient = useQueryClient();

    return useMutation<T, Error, { data: T; route: string }>({
        mutationFn: async ({ data, route }) => {
            return await DataProvider.createOne(data, route);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["users-list"] });
        },
    });
};

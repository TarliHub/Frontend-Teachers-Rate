import { useMutation, useQueryClient } from "@tanstack/react-query";
import DataProvider from "../providers/DataProvider";

export const useUpdateOne = <T>() => {
    const queryClient = useQueryClient();

    return useMutation<T, Error, { data: T; id: number; route: string }>({
        mutationFn: async ({ data, id, route }) => {
            return await DataProvider.updateOne<T>(data, id, route);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["users-list"] });
        },
    });
};

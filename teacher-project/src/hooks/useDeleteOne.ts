import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import DataProvider from "../providers/DataProvider";

export const useDeleteOne = <T>(key: string) => {
    const { token } = useContext(AuthContext);

    const queryClient = useQueryClient();

    return useMutation<T, Error, { id: number; route: string }>({
        mutationFn: async ({ id, route }) => {
            return await DataProvider.deleteOne<T>(id, route, token);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [key] });
        },
    });
};

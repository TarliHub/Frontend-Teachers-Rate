import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { AxiosError } from "axios";
import DataProvider from "../providers/DataProvider";

export const useDeleteAll = <T>(key: string) => {
    const { token } = useContext(AuthContext);

    const queryClient = useQueryClient();

    return useMutation<T, AxiosError, { route: string }>({
        mutationFn: async ({ route }) => {
            return await DataProvider.deleteAll<T>(route, token);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [key] });
        },
    });
};

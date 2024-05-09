import { useMutation, useQueryClient } from "@tanstack/react-query";

import AuthProvider from "../providers/authProvider";

import { ILoginFields } from "../types/auth.types";

export const useLoginUser = <T>() => {
    const queryClient = useQueryClient();

    return useMutation<T, Error, { data: ILoginFields }>({
        mutationFn: async ({ data }) => {
            return await AuthProvider.loginUser(data);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["users-list"] });
        },
    });
};

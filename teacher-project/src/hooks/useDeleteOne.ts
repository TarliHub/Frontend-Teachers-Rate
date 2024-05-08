import { useMutation, useQueryClient } from "@tanstack/react-query";

import UserService from "../services/User.service";

export const useDeleteOne = <T>() => {
    const queryClient = useQueryClient();

    return useMutation<T, Error, { id: number; route: string }>({
        mutationFn: async ({ id, route }) => {
            return await UserService.deleteOne<T>(id, route);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["users-list"] });
        },
    });
};

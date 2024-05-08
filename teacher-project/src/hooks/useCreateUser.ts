import { useMutation, useQueryClient } from "@tanstack/react-query";

import { IUserFields } from "../types/User.interface";

import UserService from "../services/User.service";

export const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({
            userData,
            route,
        }: {
            userData: IUserFields;
            route: string;
        }) => {
            return await UserService.createUser(userData, route);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["users-list"] });
        },
    });
};

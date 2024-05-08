import { useMutation } from "@tanstack/react-query";

import { IUserFields } from "../types/User.interface";

import UserService from "../services/User.service";

export const useCreateUser = () => {
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
    });
};

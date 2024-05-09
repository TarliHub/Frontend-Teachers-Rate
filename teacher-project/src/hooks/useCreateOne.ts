import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import DataProvider from "../providers/DataProvider";

import { ROUTES } from "../constants/routes";

import useCookie from "./useCookie";

export const useCreateOne = <T>() => {
    const { token } = useCookie(["token"]);

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    return useMutation<T, Error, { data: T; route: string }>({
        mutationFn: async ({ data, route }) => {
            return await DataProvider.createOne(data, route, token);
        },
        onSuccess: async () => {
            navigate(`${ROUTES.TEACHERS}`);
            await queryClient.invalidateQueries({ queryKey: ["users-list"] });
        },
    });
};

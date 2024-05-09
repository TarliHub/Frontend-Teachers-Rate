import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import DataProvider from "../providers/DataProvider";

import { ROUTES } from "../constants/routes";

import useCookie from "./useCookie";

export const useUpdateOne = <T>() => {
    const { token } = useCookie(["token"]);

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    return useMutation<T, Error, { data: T; id: number; route: string }>({
        mutationFn: async ({ data, id, route }) => {
            return await DataProvider.updateOne<T>(data, id, route, token);
        },
        onSuccess: async () => {
            navigate(`${ROUTES.TEACHERS}`);
            await queryClient.invalidateQueries({ queryKey: ["users-list"] });
        },
    });
};

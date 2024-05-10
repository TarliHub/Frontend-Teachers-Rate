import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import DataProvider from "../providers/DataProvider";

import { ROUTES } from "../constants/routes";

export const useCreateOne = <T>() => {
    const { token } = useContext(AuthContext);

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

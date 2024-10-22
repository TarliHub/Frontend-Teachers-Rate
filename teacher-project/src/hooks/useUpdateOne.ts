import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import DataProvider from "../providers/DataProvider";

import { ROUTES } from "../constants/routes";
import { AxiosError } from "axios";

export const useUpdateOne = <T>(key: string) => {
    const { token } = useContext(AuthContext);

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    return useMutation<T, AxiosError, { data: T; id: number; route: string }>({
        mutationFn: async ({ data, id, route }) => {
            return await DataProvider.updateOne<T>(data, id, route, token);
        },
        onSuccess: async () => {
            navigate(`${ROUTES.TEACHERS}`);
            await queryClient.invalidateQueries({ queryKey: [key] });
        },
    });
};

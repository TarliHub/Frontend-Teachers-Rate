import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import useCookie from "./useCookie";

import { ILoginFields, IUserData } from "../types/Auth.interface";

import AuthenticationProvider from "../providers/AuthenticationProvider";

export const useLoginUser = () => {
    const navigate = useNavigate();

    const updateToken = useCookie("token", "")[1];
    const updateRole = useCookie("role", "")[1];

    return useMutation<IUserData, Error, { data: ILoginFields }>({
        mutationFn: async ({ data }) => {
            return await AuthenticationProvider.loginUser(data);
        },
        onSuccess: (data) => {
            updateToken(data.token);
            updateRole(data.role);
            navigate("/");
        },
    });
};

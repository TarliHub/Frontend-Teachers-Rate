import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { ILoginFields, IUserData } from "../types/Auth.interface";

import AuthenticationProvider from "../providers/AuthenticationProvider";

export const useLoginUser = () => {
    const navigate = useNavigate();

    return useMutation<IUserData, Error, { data: ILoginFields }>({
        mutationFn: async ({ data }) => {
            return await AuthenticationProvider.loginUser(data);
        },
        onSuccess: (data) => {
            navigate("/");
            Cookies.set("token", data.token, { path: "/" });
            Cookies.set("role", data.role, { path: "/" });
        },
    });
};

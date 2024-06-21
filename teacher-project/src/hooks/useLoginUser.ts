import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { ILoginFields, IUserData } from "../types/Auth.interface";

import AuthenticationProvider from "../providers/AuthenticationProvider";
import { AxiosError } from "axios";

export const useLoginUser = () => {
    const navigate = useNavigate();

    const { setToken, setRole } = useContext(AuthContext);

    return useMutation<IUserData, AxiosError, { data: ILoginFields }>({
        mutationFn: async ({ data }) => {
            return await AuthenticationProvider.loginUser(data);
        },
        onSuccess: (data) => {
            setToken(data.token);
            setRole(data.role);
            navigate("/");
        },
    });
};

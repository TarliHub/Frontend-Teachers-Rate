import axios, { AxiosResponse } from "axios";

import { BASE_API_URL } from "../constants/api";

import { ILoginFields } from "../types/auth.types";

class AuthProvider {
    static loginUser<T>(data: ILoginFields): Promise<T> {
        return axios
            .post(`${BASE_API_URL}/auth/login`, data)
            .then((response: AxiosResponse<T>) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }
}

export default AuthProvider;

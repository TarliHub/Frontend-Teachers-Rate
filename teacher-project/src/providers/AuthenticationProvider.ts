import axios, { AxiosResponse } from "axios";

import { BASE_API_URL } from "../constants/api";

import { ILoginFields } from "../types/Auth.interface";

class AuthenticationProvider {
    static loginUser<T>(data: ILoginFields): Promise<T> {
        return axios
            .post(`${BASE_API_URL}/auth/login`, data)
            .then((response: AxiosResponse<T>) => {
                console.log(response);
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }
}

export default AuthenticationProvider;

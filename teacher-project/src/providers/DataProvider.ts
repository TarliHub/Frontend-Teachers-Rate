import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../constants/api";
import useCookie from "../hooks/useCookie";

class DataProvider {
    static useCookie = useCookie;

    static getRequestConfig() {
        const { token } = this.useCookie(["token"]);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        return config;
    }

    static getOne<T>(id: number, route: string): Promise<T> {
        return axios
            .get(`${BASE_API_URL}/${route}/${id}`, this.getRequestConfig())
            .then((response: AxiosResponse<T>) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    static getList<T>(pageParam?: number, route?: string): Promise<T> {
        return axios
            .get(`${BASE_API_URL}/${route}`, {
                params: {
                    Page: pageParam,
                    Size: 10,
                },
                ...this.getRequestConfig(),
            })
            .then((response: AxiosResponse<T>) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    static createOne<T>(data: T, route: string): Promise<T> {
        return axios
            .post(`${BASE_API_URL}/${route}`, data, this.getRequestConfig())
            .then((response: AxiosResponse<T>) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    static updateOne<T>(data: T, id: number, route: string): Promise<T> {
        return axios
            .put(
                `${BASE_API_URL}/${route}/${id}`,
                data,
                this.getRequestConfig()
            )
            .then((response: AxiosResponse<T>) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    static deleteOne<T>(id: number, route: string): Promise<T> {
        return axios
            .delete(`${BASE_API_URL}/${route}/${id}`, this.getRequestConfig())
            .then((response: AxiosResponse<T>) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }
}

export default DataProvider;

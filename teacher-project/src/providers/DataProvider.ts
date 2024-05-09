import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../constants/api";

class DataProvider {
    static getOne<T>(id: number, route: string): Promise<T> {
        return axios
            .get(`${BASE_API_URL}/${route}/${id}`)
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
            .post(`${BASE_API_URL}/${route}`, data)
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
            .put(`${BASE_API_URL}/${route}/${id}`, data)
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
            .delete(`${BASE_API_URL}/${route}/${id}`)
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
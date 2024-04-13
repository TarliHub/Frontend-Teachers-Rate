import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../constants/api";
import { IUser, IUserUpdate, IUsersList } from "../types/User.interface";

class UserService {
    static getUser(userId: number): Promise<IUser> {
        return axios
            .get(`${BASE_API_URL}/User/${userId}`)
            .then((response: AxiosResponse<IUser>) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    static getUsersList(pageParam?: number): Promise<IUsersList> {
        return axios
            .get(`${BASE_API_URL}/User`, {
                params: {
                    PageIndex: pageParam,
                    PageSize: 10,
                },
            })
            .then((response: AxiosResponse<IUsersList>) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    static createUser(userData: IUser): Promise<IUser> {
        return axios
            .post(`${BASE_API_URL}/User`, userData)
            .then((response: AxiosResponse<IUser>) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    static updateUser(userData: IUserUpdate): Promise<IUser> {
        return axios
            .put(`${BASE_API_URL}/User/${userData.id}`, userData)
            .then((response: AxiosResponse<IUser>) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    static deleteUser(userId: number): Promise<T> {
        return axios
            .delete(`${BASE_API_URL}/User/${userId}`)
            .then((response: AxiosResponse<T, D>) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }
}

export default UserService;

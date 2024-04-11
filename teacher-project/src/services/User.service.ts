import axios from "axios";
import { BASE_API_URL } from "../constants/api";
import { IUsersList } from "../types/User.interface";

class UserService {
    static getUsersList(pageParam?: number) {
        return axios
            .get(`${BASE_API_URL}/User`, {
                params: {
                    PageIndex: pageParam,
                    PageSize: 10,
                },
            })
            .then((response) => {
                return response.data as IUsersList;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }
}

export default UserService;

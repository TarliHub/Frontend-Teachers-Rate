import axios from "axios";
import { BASE_API_URL } from "../constants/api";

class UserService {
    static getUsersList(pageParam?: number) {
        return axios
            .get(`${BASE_API_URL}/User`, {
                params: {
                    PageIndex: pageParam,
                    PageSize: 5,
                },
            })
            .then((response) => response.data)
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }
}

export default UserService;

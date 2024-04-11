import axios from "axios";
import { BASE_API_URL } from "../constants/api";

class UserService {
    name: string;
    lastName: string;
    login: string;
    password: string;
    registeredAt: Date;
    role: number;
    rating: number;

    constructor(
        name: string,
        lastName: string,
        login: string,
        password: string,
        registeredAt: Date,
        role: number,
        rating: number
    ) {
        this.name = name;
        this.lastName = lastName;
        this.login = login;
        this.password = password;
        this.registeredAt = registeredAt;
        this.role = role;
        this.rating = rating;
    }

    static getUsersList() {
        return axios
            .get(`${BASE_API_URL}/User`)
            .then((response) => response.data)
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }
}

export default UserService;

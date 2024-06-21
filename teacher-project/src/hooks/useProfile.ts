import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_API_URL } from "../constants/api";

const fetchUserProfile = async <T>(token: string): Promise<T> => {
    const response = await axios.get(`${BASE_API_URL}/auth/rate`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data as T;
};

export const useProfile = <T>(token: string) => {
    return useQuery<T, Error>({
        queryKey: ["userProfile"],
        queryFn: async () => {
            return await fetchUserProfile<T>(token);
        },
    });
};

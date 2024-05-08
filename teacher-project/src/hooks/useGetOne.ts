import { useQuery } from "@tanstack/react-query";
import UserService from "../services/User.service";

export const useGetOne = <T>(id: number, route: string) => {
    return useQuery<T, Error>({
        queryKey: ["user"],
        queryFn: async () => {
            return await UserService.getOne<T>(id, route);
        },
    });
};

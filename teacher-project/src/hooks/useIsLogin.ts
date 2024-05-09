import useCookie from "./useCookie";

export const useIsLogin = () => {
    const { token, role } = useCookie(["token", "role"]);

    return !!token && !!role;
};

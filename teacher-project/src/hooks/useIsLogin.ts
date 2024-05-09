import useCookies from "./useCookie";

export const useIsLogin = () => {
    const { token, role } = useCookies(["token", "role"]);

    return !!token && !!role;
};

import Cookies from "js-cookie";

const useCookie = (cookieNames: string[]) => {
    const cookies: Record<string, string> = {};

    cookieNames.forEach((cookieName) => {
        cookies[cookieName] = Cookies.get(cookieName) || "";
    });
    return cookies;
};

export default useCookie;

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useCookies = (cookieNames: string[]) => {
    const [cookieValues, setCookieValues] = useState<Record<string, string>>(
        {}
    );

    useEffect(() => {
        const cookies: Record<string, string> = {};
        cookieNames.forEach((cookieName) => {
            cookies[cookieName] = Cookies.get(cookieName) || "";
        });
        setCookieValues(cookies);
    }, [cookieNames]);

    return cookieValues;
};

export default useCookies;

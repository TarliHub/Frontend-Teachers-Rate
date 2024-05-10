import { useState, useCallback } from "react";

import Cookies from "js-cookie";

export default function useCookie(
    name: string,
    defaultValue: string
): [string, (newValue: string) => void, () => void] {
    const [value, setValue] = useState<string>(() => {
        const cookie = Cookies.get(name);
        if (cookie !== undefined) return cookie;
        Cookies.set(name, defaultValue);
        return defaultValue;
    });

    const updateCookie = useCallback(
        (newValue: string) => {
            Cookies.set(name, newValue, { path: "/" });
            setValue(newValue);
        },
        [name]
    );

    const deleteCookie = useCallback(() => {
        Cookies.remove(name);
        setValue(defaultValue);
    }, [name, defaultValue]);

    return [value, updateCookie, deleteCookie];
}

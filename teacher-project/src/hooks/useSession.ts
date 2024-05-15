import { useState, useCallback } from "react";

export function useSession<T>(
    name: string,
    defaultValue: T
): [T, (newValue: T) => void, () => void] {
    const [value, setValue] = useState<T>(() => {
        const sessionValue = sessionStorage.getItem(name);
        if (sessionValue !== null) {
            return typeof defaultValue === "number"
                ? (Number(sessionValue) as T)
                : (sessionValue as T);
        }
        sessionStorage.setItem(name, String(defaultValue));
        return defaultValue;
    });

    const updateSession = useCallback(
        (newValue: T) => {
            sessionStorage.setItem(name, String(newValue));
            setValue(newValue);
        },
        [name]
    );

    const deleteSession = useCallback(() => {
        sessionStorage.removeItem(name);
        setValue(defaultValue);
    }, [name, defaultValue]);

    return [value, updateSession, deleteSession];
}

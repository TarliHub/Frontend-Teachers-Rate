import { useState, useCallback } from "react";

export function useSession<T extends string | number>(
    name: string,
    defaultValue: T
): [T, (newValue: T) => void, () => void] {
    const [value, setValue] = useState<T>(() => {
        const sessionValue = sessionStorage.getItem(name);
        if (sessionValue !== null) return sessionValue as T;
        sessionStorage.setItem(name, defaultValue.toString());
        return defaultValue;
    });

    const updateSession = useCallback(
        (newValue: T) => {
            sessionStorage.setItem(name, newValue.toString());
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

import { useState, useCallback } from "react";

export function useSession(
    name: string,
    defaultValue: string
): [string, (newValue: string) => void, () => void] {
    const [value, setValue] = useState<string>(() => {
        const sessionValue = sessionStorage.getItem(name);
        if (sessionValue !== null) return sessionValue;
        sessionStorage.setItem(name, defaultValue);
        return defaultValue;
    });

    const updateSession = useCallback(
        (newValue: string) => {
            sessionStorage.setItem(name, newValue);
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

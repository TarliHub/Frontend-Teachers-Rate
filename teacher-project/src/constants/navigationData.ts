import { ROUTES } from "./routes";

export const userNavigation = [
    {
        url: "/",
        name: "Головна",
    },
    {
        url: ROUTES.TASKS,
        name: "Завдання",
    },
];

export const adminNavigation = [
    {
        url: "/",
        name: "Головна",
    },
    {
        url: ROUTES.TEACHERS,
        name: "Голови центральних комісій",
    },
    {
        url: ROUTES.TASKS,
        name: "Завдання",
    },
    {
        url: "/category",
        name: "Категорії",
    },
];

export const cCNavigation = [
    {
        url: "/",
        name: "Головна",
    },
    {
        url: ROUTES.TEACHERS,
        name: "Вчителі",
    },
    {
        url: ROUTES.TASKS,
        name: "Завдання",
    },
];

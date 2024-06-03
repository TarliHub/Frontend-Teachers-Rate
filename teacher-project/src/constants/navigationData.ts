import { ROUTES } from "./routes";

export const userNavigation = [
    {
        url: ROUTES.TASKS,
        name: "Показники",
    },
];

export const adminNavigation = [
    {
        url: ROUTES.TEACHERS,
        name: "Голови циклових комісій",
    },
    {
        url: ROUTES.TASKS,
        name: "Показники",
    },
    {
        url: "/category",
        name: "Категорії",
    },
    {
        url: "/",
        name: "Налаштування",
    },
];

export const cCNavigation = [
    {
        url: ROUTES.TEACHERS,
        name: "Викладачі",
    },
    {
        url: ROUTES.TASKS,
        name: "Показники",
    },
];

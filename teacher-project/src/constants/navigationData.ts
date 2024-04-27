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
        url: ROUTES.MANAGE_TEACHERS,
        name: "Редагувати вчителів",
    },
    {
        url: ROUTES.TEACHER_SCORES,
        name: "Рейтинги вчителів",
    },
    {
        url: ROUTES.ALL_USERS,
        name: "Усі користувачі",
    },
    {
        url: ROUTES.TASKS,
        name: "Перевірити завдання",
    },
];

export const cCNavigation = [
    {
        url: "/",
        name: "Головна",
    },
    {
        url: ROUTES.TASKS,
        name: "Перевірити завдання",
    },
    {
        url: ROUTES.MANAGE_TEACHERS,
        name: "Редагувати вчителів",
    },
];

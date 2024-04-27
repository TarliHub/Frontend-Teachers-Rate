import styles from "./NavigationBar.module.scss";
import { ROUTES } from "../../constants/routes";
import { CustomNavLink } from "./CustomNavLink/CustomNavLink";

export function NavigationBarAdmin(): JSX.Element {
    return (
        <div className={styles.navigationBar}>
            <CustomNavLink url="/" name="Головна" />
            <CustomNavLink
                url={ROUTES.MANAGE_TEACHERS}
                name="Редагувати вчителів"
            />
            <CustomNavLink
                url={ROUTES.TEACHER_SCORES}
                name="Рейтинги вчителів"
            />
            <CustomNavLink url={ROUTES.ALL_USERS} name="Усі користувачі" />
            <CustomNavLink url={ROUTES.TASKS} name="Перевірити завдання" />
        </div>
    );
}

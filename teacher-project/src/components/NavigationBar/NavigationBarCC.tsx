import styles from "./NavigationBar.module.scss";
import { ROUTES } from "../../constants/routes";
import { CustomNavLink } from "./CustomNavLink/CustomNavLink";

export function NavigationBarCC(): JSX.Element {
    return (
        <div className={styles.navigationBar}>
            <p>Тернопільський коледж</p>
            <CustomNavLink url="/" name="Головна" />
            <CustomNavLink url={ROUTES.TASKS} name="Перевірити завдання" />
            <CustomNavLink url={ROUTES.MANAGE_TEACHERS} name="Редагувати вчителів" />
        </div>
    );
}

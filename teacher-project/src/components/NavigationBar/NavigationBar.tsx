import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import { ROUTES } from "../../constants/routes";
import "./NavigationBar.css";

export function NavigationBar(): JSX.Element {
    return (
        <div className={styles.navigationBar}>
            <p>Тернопільський коледж</p>
            <NavLink
                className={styles.main}
                to="/"
            >
                Головна
            </NavLink>
            <NavLink
                className={styles.tasks}
                to={ROUTES.TASKS}
            >
                Завдання
            </NavLink>
        </div>
    );
}

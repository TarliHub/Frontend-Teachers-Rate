import styles from "../NavigationBar.module.scss";

import { useMemo } from "react";
import { NavLink } from "react-router-dom";

interface ICustomNavLinkProps {
    url: string;
    name: string;
}

export function CustomNavLink({ url, name }: ICustomNavLinkProps): JSX.Element {
    const activeClassName = useMemo(() => styles.active, []);

    return (
        <NavLink
            to={url}
            className={({ isActive }) => (isActive ? activeClassName : "")}
        >
            {name}
        </NavLink>
    );
}

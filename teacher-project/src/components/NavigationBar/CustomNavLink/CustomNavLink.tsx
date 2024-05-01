import styles from "../NavigationBar.module.scss";

import { useMemo } from "react";
import { NavLink } from "react-router-dom";

interface ICustomNavLinkProps {
    url: string;
    name?: string;
    logo?: string;
}

export function CustomNavLink({
    url,
    name,
    logo,
}: ICustomNavLinkProps): JSX.Element {
    const activeClassName = useMemo(() => styles.active, []);

    return (
        <NavLink
            to={url}
            className={({ isActive }) => (isActive ? activeClassName : "")}
        >
            {name ? (
                name
            ) : (
                <img
                    className="w-[60px] h-[60px]"
                    src={logo}
                    alt="Avatar Icon"
                />
            )}
        </NavLink>
    );
}

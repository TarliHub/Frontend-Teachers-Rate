import styles from "./NavigationBar.module.scss";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CustomNavLink } from "./CustomNavLink/CustomNavLink";
import { CollegeLogo } from "../CollegeLogo/CollegeLogo";

import menuIcon from "../../assets/icons/mobileMenuIcon.svg";
import cross from "../../assets/icons/cross.svg";
import avatarIcon from "../../assets/icons/avatar.svg";

import { INavigation } from "../../types/Navigation.interface";
import { ROUTES } from "../../constants/routes";
import { AuthContext } from "../../context/AuthContext";

interface INavigationBarBlockProps {
    navigationData: INavigation[];
}

export function NavigationBarBlock({
    navigationData,
}: INavigationBarBlockProps): JSX.Element {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const { role } = useContext(AuthContext);

    return (
        <header>
            <div className={styles.mobileMenu}>
                <div
                    className={
                        showMenu
                            ? `${styles.mobileList} ${styles.invisible}`
                            : `${styles.mobileList}`
                    }
                >
                    <div className={styles.listOfButtons}>
                        <div className={styles.menuHeader}>
                            <h2>Меню</h2>
                            <button onClick={() => setShowMenu(false)}>
                                <img src={cross} alt="Close" />
                            </button>
                        </div>
                        {navigationData.map((item, index) => (
                            <Link key={index} to={item.url}>
                                {item.name}
                            </Link>
                        ))}
                        {role === 0 ? (
                            <></>
                        ) : (
                            <Link to={ROUTES.MAIN}>Профіль</Link>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.navigationBar}>
                <CollegeLogo />
                {navigationData.map((item, index) => (
                    <CustomNavLink
                        key={index}
                        url={item.url}
                        name={item.name}
                    />
                ))}
                {role === 0 ? (
                    <></>
                ) : (
                    <CustomNavLink url={ROUTES.MAIN} logo={avatarIcon} />
                )}
                <div className={styles.mobileMenuButton}>
                    <button onClick={() => setShowMenu(true)}>
                        <img
                            className="max-w-10 max-h-10"
                            src={menuIcon}
                            alt="Menu Icon"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}

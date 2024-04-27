import styles from "./NavigationBar.module.scss";
import { CustomNavLink } from "./CustomNavLink/CustomNavLink";
import { CollegeLogo } from "../CollegeLogo/CollegeLogo";
import menuIcon from "../../assets/icons/mobileMenuIcon.svg";
import cross from "../../assets/icons/cross.svg";
import { INavigation } from "../../types/Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

interface INavigationBarBlockProps {
    navigationData: INavigation[];
}

export function NavigationBarBlock({
    navigationData,
}: INavigationBarBlockProps): JSX.Element {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <>
            <div
                className={
                    showMenu
                        ? `${styles.mobileMenu}`
                        : `${styles.mobileMenu} ${styles.invisible} `
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
        </>
    );
}

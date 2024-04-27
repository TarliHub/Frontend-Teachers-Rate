import styles from "./NavigationBar.module.scss";
import { CustomNavLink } from "./CustomNavLink/CustomNavLink";
import { CollegeLogo } from "../CollegeLogo/CollegeLogo";
import { INavigation } from "../../types/Navigation";

interface INavigationBarBlockProps {
    navigationData: INavigation[];
}

export function NavigationBarBlock({
    navigationData,
}: INavigationBarBlockProps): JSX.Element {
    return (
        <div className={styles.navigationBar}>
            <CollegeLogo />
            {navigationData.map((item, index) => (
                <CustomNavLink key={index} url={item.url} name={item.name} />
            ))}
        </div>
    );
}

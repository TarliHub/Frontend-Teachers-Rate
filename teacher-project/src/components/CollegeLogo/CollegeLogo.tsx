import styles from "./CollegeLogo.module.scss";
import logo from "../../assets/icons/collegeIcon.png";

export function CollegeLogo(): JSX.Element {
    return (
        <div className={styles.logoBlock}>
            <img
                className="w-[100px] h-[100px]"
                src={logo}
                alt="College Logo"
            />
            <div className={styles.logoText}>
                <p>Тернопільський</p>
                <p>фаховий коледж</p>
            </div>
        </div>
    );
}

import { Link } from "react-router-dom";
import styles from "./CentralComisionInfo.module.scss";
import { ROUTES } from "../../constants/routes";

interface ICentralComisionInfoProps {
    name?: string;
    comissionName?: string;
    id?: number;
}

export function CentralComisionInfo({
    name,
    comissionName,
    id,
}: ICentralComisionInfoProps) {
    return (
        <div className={styles.info}>
            <p>Назва комісії: {comissionName}</p>
            <p>Голова циклової комісії</p>
            <Link to={`${ROUTES.TEACHERS}/head-teacher/${id}`}>{name}</Link>
        </div>
    );
}

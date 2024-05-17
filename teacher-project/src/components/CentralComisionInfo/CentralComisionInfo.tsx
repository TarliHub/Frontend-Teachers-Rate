import styles from "./CentralComisionInfo.module.scss";

interface ICentralComisionInfoProps {
    name?: string;
    comissionName?: string;
}

export function CentralComisionInfo({
    name,
    comissionName,
}: ICentralComisionInfoProps) {
    return (
        <div className={styles.info}>
            <p>{comissionName}</p>
            <p>{name}</p>
        </div>
    );
}

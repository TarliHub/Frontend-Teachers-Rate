import { IUser } from "../../types/User.interface";
import styles from "./UserProfile.module.scss";

interface IUserProfileProps {
    data?: IUser;
}

export function UserProfile({ data }: IUserProfileProps) {
    return (
        <div>
            <div className={styles.info}>
                <p>{`${data?.lastName} ${data?.name} ${data?.middleName}`}</p>
                <p>Email: {data?.email}</p>
                <p>Рейтинг: {data?.points}</p>
                <p>Назва комісії: {data?.commissionName}</p>
            </div>
            <h3 className={styles.header}>Виконані завдання</h3>
            <div className={styles.taskList}>
                <div className={styles.header}>
                    <p className="flex-[3]">Завдання</p>
                    <p className="flex-[2]">Умова</p>
                    <div className="flex-1">Оцінка</div>
                </div>
                {data?.tasks.map((item) => {
                    return (
                        <div className={styles.taskContainer} key={item.id}>
                            <div className="flex-[3]">
                                <p>{item.task.title}</p>
                            </div>
                            <p className="flex-[2]">{item.task.approval}</p>
                            <p className="flex-1">{item.points}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
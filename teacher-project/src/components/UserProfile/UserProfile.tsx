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
                <p>Загальний бал: {data?.points}</p>
                <p>Назва комісії: {data?.commissionName}</p>
            </div>
            <h3 className={styles.header}>Виконані показники</h3>
            <div className={styles.taskList}>
                <div className={styles.header}>
                    <p className="flex-[2]">Показник</p>
                    <p className="flex-[2]">Підтвердження</p>
                    <p className="flex-[2]">Категорія</p>
                    <div className="flex-1">Бал</div>
                </div>
                {data?.tasks.map((item) => {
                    return (
                        <div className={styles.taskContainer} key={item.id}>
                            <div className="flex-[2]">
                                <p>{item.task.title}</p>
                            </div>
                            <p className="flex-[2]">{item.task.approval}</p>
                            <p className="flex-[2]">{item.task.category.name}</p>
                            <p className="flex-1">{item.points}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

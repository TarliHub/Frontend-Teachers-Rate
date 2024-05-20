import styles from "./TaskList.module.scss";
import { ITask } from "../../types/Task.interface";

interface ITaskList {
    list?: ITask[];
}

export function TaskList({ list }: ITaskList) {
    return (
        <div className={styles.taskList}>
            <div className={styles.header}>
                <p className="flex-[3]">Завдання</p>
                <p className="flex-[2]">approval</p>
                <div className="flex-1">Оцінки</div>
            </div>
            {list?.map((item) => {
                return (
                    <div className={styles.taskContainer} key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.pointsDescription}</p>
                        <p>{item.points}</p>
                    </div>
                );
            })}
        </div>
    );
}

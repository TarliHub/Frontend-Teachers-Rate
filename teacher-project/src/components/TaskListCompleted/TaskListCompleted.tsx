import styles from "./TaskListCompleted.module.scss";
import { ITask } from "../../types/Task.interface";

interface ITaskListCompletedProps {
    list?: ITask[];
}

export function TaskListCompleted({ list }: ITaskListCompletedProps) {
    return (
        <div className={styles.taskList}>
            <div className={styles.header}>
                <p className="flex-[3]">Завдання</p>
                <p className="flex-[2]">Умова</p>
                <div className="flex-1">Оцінка</div>
            </div>
            {list?.map((item) => {
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
    );
}

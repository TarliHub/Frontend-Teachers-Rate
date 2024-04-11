import { fakeTasks } from "../../constants/fakeData";
import styles from "./CompletedTasks.module.scss";

export function CompletedTasks(): JSX.Element {
    return (
        <div className={styles.taskContainer}>
            {fakeTasks.map((item) => (
                <div className={styles.taskElement} key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Оцінка: {item.grade}</p>
                </div>
            ))}
        </div>
    );
}

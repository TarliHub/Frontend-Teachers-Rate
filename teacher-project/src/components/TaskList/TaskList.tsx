import styles from "./TaskList.module.scss";
import { ITask } from "../../types/Task.interface";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

interface ITaskListProps {
    list?: ITask[];
}

export function TaskList({ list }: ITaskListProps) {
    const { role } = useContext(AuthContext);

    return (
        <div className={styles.taskList}>
            <div className={styles.header}>
                <p className="flex-[3]">Завдання</p>
                <p className="flex-[2]">Умова</p>
                <div className="flex-1"></div>
            </div>
            {list?.map((item) => {
                return (
                    <div className={styles.taskContainer} key={item.id}>
                        <div className="flex-[3]">
                            {role === 0 ? (
                                <p>{item.title}</p>
                            ) : (
                                <Link to={`${ROUTES.TASKS}/submit/${item.id}`}>
                                    {item.title}
                                </Link>
                            )}
                        </div>
                        <p className="flex-1">{item.approval}</p>

                        <div className={styles.buttonContainer}>
                            {role === 0 && (
                                <>
                                    <Link
                                        to={`${ROUTES.TASKS}/update-task/${item.id}`}
                                        title="Змінити завдання"
                                    >
                                        <span className="material-symbols-outlined">
                                            edit
                                        </span>
                                    </Link>
                                    <button title="Видалити завдання">
                                        <span className="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

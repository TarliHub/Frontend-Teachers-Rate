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
    if (role === 0) {
        return (
            <div className={styles.taskList}>
                <div className={styles.header}>
                    <p className="flex-[5]">Показник</p>
                    <p className="flex-[5]">Підтвердження</p>
                    <div className="flex-1"></div>
                </div>
                {list?.map((item) => {
                    return (
                        <div className={styles.taskContainer} key={item.id}>
                            <div className="flex-[3] p-3 flex flex-row">
                                <div className="flex-[3]">
                                    <p>{item.title}</p>
                                </div>
                                <p className="flex-1">{item.approval}</p>
                            </div>
                            <div className={styles.buttonContainer}>
                                <Link
                                    to={`${ROUTES.TASKS}/update-task/${item.id}`}
                                    title="Змінити показник"
                                >
                                    <span className="material-symbols-outlined">
                                        edit
                                    </span>
                                </Link>
                                <button title="Видалити показник">
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
    return (
        <div className={styles.taskList}>
            <div className={styles.header}>
                <p className="flex-[4]">Показник</p>
                <p className="flex-[4]">Підтвердження</p>
                <div className="flex-1"></div>
            </div>
            {list?.map((item) => {
                return (
                    <div className={styles.taskContainer} key={item.id}>
                        <div className="flex-[3]">
                            <Link
                                className="flex flex-row p-3 hover:bg-slate-300 rounded-md"
                                to={`/tasks/${item.id}`}
                            >
                                <div className="flex-[3]">
                                    <p>{item.title}</p>
                                </div>
                                <p className="flex-1">{item.approval}</p>
                            </Link>
                        </div>
                        <div className={styles.buttonContainer}>
                            {role === 0 && (
                                <>
                                    <Link
                                        to={`${ROUTES.TASKS}/update-task/${item.id}`}
                                        title="Змінити показник"
                                    >
                                        <span className="material-symbols-outlined">
                                            edit
                                        </span>
                                    </Link>
                                    <button title="Видалити показник">
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

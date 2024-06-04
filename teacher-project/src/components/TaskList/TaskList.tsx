import styles from "./TaskList.module.scss";
import { ITask } from "../../types/Task.interface";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { useDeleteOne } from "../../hooks/useDeleteOne";
import { AxiosError } from "axios";

interface ITaskListProps {
    list?: ITask[];
}

export function TaskList({ list }: ITaskListProps) {
    const { deleteToken } = useContext(AuthContext);
    const [error, setError] = useState<string | null>(null);
    const [errorCode, setErrorCode] = useState<number | null>(null);

    const DeleteTask = useDeleteOne<void>("tasks");

    const handleDelete = (id: number) => {
        DeleteTask.mutate(
            {
                id,
                route: "tasks",
            },
            {
                onError: (error: AxiosError) => {
                    if (error.response?.status === 401) {
                        setError("Час авторизації вийшов. Увійдіть знову.");
                        setErrorCode(401);
                    } else {
                        setError(error.message);
                        setErrorCode(error.response?.status || null);
                    }
                },
            }
        );
    };

    const handleErrorButtonClick = () => {
        if (errorCode === 401) {
            deleteToken();
        } else {
            setError("");
            setErrorCode(0);
        }
        setError(null);
        setErrorCode(null);
    };

    return (
        <div>
            {error && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-red-600 mb-4">{error}</p>
                        <button
                            className="bg-primaryBlue p-2 rounded-md text-white hover:bg-secondaryBlue"
                            onClick={handleErrorButtonClick}
                        >
                            Продовжити
                        </button>
                    </div>
                </div>
            )}
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
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    title="Видалити показник"
                                >
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

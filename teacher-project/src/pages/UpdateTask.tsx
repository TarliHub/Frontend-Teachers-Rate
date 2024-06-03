import { Link, useParams } from "react-router-dom";
import { useGetOne } from "../hooks/useGetOne";
import { ROUTES } from "../constants/routes";
import { useUpdateOne } from "../hooks/useUpdateOne";
import { ITask, ITaskOne } from "../types/Task.interface";
import { TaskForm } from "../components/TaskForm/TaskForm";
import { useList } from "../hooks/useList";
import { ICategoryList } from "../types/Category.interface";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { AxiosError } from "axios";

export function UpdateTask(): JSX.Element {
    const { deleteToken } = useContext(AuthContext);
    const [showError, setShowError] = useState(true);
    const { id } = useParams();
    const postId = id !== undefined ? parseInt(id) : 0;

    const task = useGetOne<ITaskOne>(postId, "tasks", "tasks");

    const category = useList<ICategoryList>("category", 0, "category");

    const UpdateTask = useUpdateOne<ITask>("tasks");

    const [error, setError] = useState<string | null>(null);
    const [errorCode, setErrorCode] = useState<number | null>(null);

    const handleUpdateTask = (data: ITask) => {
        UpdateTask.mutate(
            {
                data,
                id: postId,
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
        } else if ((task.error as AxiosError).response?.status === 401) {
            deleteToken();
        } else {
            setError("");
            setErrorCode(0);
            setShowError(false);
        }
        setError(null);
        setErrorCode(null);
    };

    if (task.error && showError) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-red-600 mb-4">
                        {(task.error as AxiosError).response?.status === 401
                            ? "Час авторизації вийшов"
                            : task.error.message}
                    </p>
                    <button
                        className="bg-primaryBlue p-2 rounded-md text-white hover:bg-secondaryBlue"
                        onClick={handleErrorButtonClick}
                    >
                        Продовжити
                    </button>
                </div>
            </div>
        );
    }

    if (category.error && showError) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-red-600 mb-4">
                        {(category.error as AxiosError).response?.status === 401
                            ? "Час авторизації вийшов"
                            : category.error.message}
                    </p>
                    <button
                        className="bg-primaryBlue p-2 rounded-md text-white hover:bg-secondaryBlue"
                        onClick={handleErrorButtonClick}
                    >
                        Продовжити
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Link to={ROUTES.TASKS}>Назад</Link>
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
            <TaskForm
                handleTask={handleUpdateTask}
                taskData={task?.data}
                categories={category.data?.items}
            />
        </div>
    );
}

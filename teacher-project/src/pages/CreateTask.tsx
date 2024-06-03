import { TaskForm } from "../components/TaskForm/TaskForm";
import { useCreateOne } from "../hooks/useCreateOne";
import { useList } from "../hooks/useList";
import { ICategoryList } from "../types/Category.interface";
import { ITask } from "../types/Task.interface";
import { useContext, useState } from "react";
import { AxiosError } from "axios";
import { AuthContext } from "../context/AuthContext";

export function CreateTask() {
    const [error, setError] = useState<string | null>(null);
    const [errorCode, setErrorCode] = useState<number | null>(null);
    const { deleteToken } = useContext(AuthContext);

    const CreateTask = useCreateOne<ITask>("tasks", "tasks");

    const { data } = useList<ICategoryList>("category", 0, "category");

    const handleCreateTask = (data: ITask) => {
        CreateTask.mutate(
            {
                data,
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
            <TaskForm
                categories={data?.items}
                handleCreateTask={handleCreateTask}
            />
        </div>
    );
}

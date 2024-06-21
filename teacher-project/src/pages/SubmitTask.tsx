import { useParams } from "react-router-dom";
import { SubmitTaskForm } from "../components/SubmitTask/SubmitTaskForm";
import { useCreateOne } from "../hooks/useCreateOne";
import { ISubmitTask, ITaskOne } from "../types/Task.interface";
import { useGetOne } from "../hooks/useGetOne";
import { useContext, useState } from "react";
import { AxiosError } from "axios";
import { AuthContext } from "../context/AuthContext";

export function SubmitTask() {
    const { id } = useParams();
    const taskId = id !== undefined ? parseInt(id) : 0;

    const { deleteToken } = useContext(AuthContext);

    const [error, setError] = useState<string | null>(null);
    const [errorCode, setErrorCode] = useState<number | null>(null);

    const SubmitTask = useCreateOne<ISubmitTask>("completed-tasks", "tasks");

    const handlSubmitTask = (data: ISubmitTask) => {
        SubmitTask.mutate(
            {
                data,
                route: "tasks/send-request",
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

    const pointsData = useGetOne<ITaskOne>(taskId, "tasks", "tasks");

    if (pointsData.error) {
        if ((pointsData.error as AxiosError).response?.status === 401) {
            setError("Час авторизації вийшов. Увійдіть знову.");
            setErrorCode(401);
        } else {
            setError(pointsData.error.message);
            setErrorCode(
                (pointsData.error as AxiosError).response?.status || null
            );
        }
    }

    const handleErrorButtonClick = () => {
        if (errorCode === 401) {
            deleteToken();
        }
        setError("");
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
            <SubmitTaskForm
                handleSubmitTask={handlSubmitTask}
                points={pointsData.data?.points}
                taskId={taskId}
            />
        </div>
    );
}

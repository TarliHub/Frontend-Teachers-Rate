import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { useList } from "../hooks/useList";
import { ITaskList } from "../types/Task.interface";
import { TaskList } from "../components/TaskList/TaskList";
import { TaskListCompleted } from "../components/TaskListCompleted/TaskListCompleted";
import { AuthContext } from "../context/AuthContext";
import { useDeleteAll } from "../hooks/useDeleteAll";
import { AxiosError } from "axios";
import { ROUTES } from "../constants/routes";

export function Tasks(): JSX.Element {
    const [taskFilter, setTaskFilter] = useState("tasks");
    const [currentPage, setCurrentPage] = useState(0);
    const [showError, setShowError] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [errorCode, setErrorCode] = useState<number | null>(null);

    const { role, deleteToken } = useContext(AuthContext);

    const { data, error: fetchError } = useList<ITaskList>(
        taskFilter,
        currentPage,
        taskFilter
    );

    const completedTasks =
        role !== 0
            ? useList<ITaskList>(
                "tasks/completed-tasks",
                currentPage,
                "tasks/completed-tasks"
            )
            : null;

    const deleteAllTasks = useDeleteAll("tasks");

    const handleDeleteAllClick = () => {
        deleteAllTasks.mutate(
            { route: "tasks" },
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

    const handleContinueClick = () => {
        if (errorCode === 401) {
            deleteToken();
        } else {
            setShowError(false);
        }
        setError(null);
        setErrorCode(null);
    };

    const handleCompletedTasksContinueClick = () => {
        if (
            completedTasks?.error &&
            (completedTasks.error as AxiosError).response?.status === 401
        ) {
            deleteToken();
        } else {
            setShowError(false);
        }
    };

    if (fetchError && showError) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-red-600 mb-4">
                        {(fetchError as AxiosError).response?.status === 401
                            ? "Час авторизації вийшов"
                            : (fetchError as AxiosError).message}
                    </p>
                    <button
                        className="bg-primaryBlue p-2 rounded-md text-white hover:bg-secondaryBlue"
                        onClick={handleContinueClick}
                    >
                        Продовжити
                    </button>
                </div>
            </div>
        );
    }

    if (completedTasks?.error && showError) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-red-600 mb-4">
                        {(completedTasks.error as AxiosError).response
                            ?.status === 401
                            ? "Час авторизації вийшов увійдіть знову"
                            : (completedTasks.error as AxiosError).message}
                    </p>
                    <button
                        className="bg-primaryBlue p-2 rounded-md text-white hover:bg-secondaryBlue"
                        onClick={handleCompletedTasksContinueClick}
                    >
                        Продовжити
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            {error && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-red-600 mb-4">{error}</p>
                        <button
                            className="bg-primaryBlue p-2 rounded-md text-white hover:bg-secondaryBlue"
                            onClick={handleContinueClick}
                        >
                            Продовжити
                        </button>
                    </div>
                </div>
            )}
            <div className="flex justify-end m-4">
                {role === 0 && (
                    <>
                        <Link
                            className=" flex items-center gap-1 text-secondaryBlue cursor-pointer"
                            to={`${ROUTES.TASKS}/create-task`}
                        >
                            <span className="material-symbols-outlined text-3xl">
                                add
                            </span>
                            <p className="text-lg font-medium">СТВОРИТИ</p>
                        </Link>
                        <button
                            className="px-4 py-2 text-xl rounded-md bg-red-600 text-white"
                            onClick={handleDeleteAllClick}
                        >
                            Видалити всі
                        </button>
                    </>
                )}
                {role !== 0 && (
                    <div className="flex gap-4">
                        <button
                            className={`px-4 py-2 text-xl rounded-md ${
                                taskFilter === "tasks"
                                    ? "bg-primaryBlue text-white"
                                    : "bg-gray-200 text-black"
                            }`}
                            onClick={() => setTaskFilter("tasks")}
                        >
                            Усі показники
                        </button>
                        <button
                            className={`px-4 py-2 text-xl rounded-md ${
                                taskFilter === "tasks/completed-tasks"
                                    ? "bg-primaryBlue text-white"
                                    : "bg-gray-200 text-black"
                            }`}
                            onClick={() =>
                                setTaskFilter("tasks/completed-tasks")
                            }
                        >
                            Виконані показники
                        </button>
                    </div>
                )}
            </div>
            {taskFilter === "tasks" && <TaskList list={data?.items} />}
            {taskFilter === "tasks/completed-tasks" && (
                <TaskListCompleted list={completedTasks?.data?.items} />
            )}
            <div>
                <Pagination
                    totalPages={data?.totalPages}
                    currentPage={currentPage}
                    setPage={setCurrentPage}
                />
            </div>
        </div>
    );
}

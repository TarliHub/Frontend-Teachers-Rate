import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Pagination } from "../components/Pagination/Pagination";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useList } from "../hooks/useList";
import { ITaskList } from "../types/Task.interface";
import { TaskList } from "../components/TaskList/TaskList";
import { TaskListCompleted } from "../components/TaskListCompleted/TaskListCompleted";
import { AxiosError } from "axios";

export function Tasks(): JSX.Element {
    const [taskFilter, setTaskFilter] = useState("tasks");
    const [currentPage, setCurrentPage] = useState(0);
    const [showError, setShowError] = useState(true);

    const { role, deleteToken } = useContext(AuthContext);

    const { data, error } = useList<ITaskList>(
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

    const handleContinueClick = () => {
        if (error && (error as AxiosError).response?.status === 401) {
            deleteToken();
        } else {
            setShowError(false);
        }
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

    if (error && showError) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-red-600 mb-4">
                        {(error as AxiosError).response?.status === 401
                            ? "Час авторизації вийшов"
                            : (error as AxiosError).message}
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
            <div className="flex justify-end m-4">
                {role === 0 && (
                    <Link
                        className=" flex items-center gap-1 text-secondaryBlue cursor-pointer"
                        to={`${ROUTES.TASKS}/create-task`}
                    >
                        <span className="material-symbols-outlined text-3xl">
                            add
                        </span>
                        <p className="text-lg font-medium">СТВОРИТИ</p>
                    </Link>
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
                            Не виконані завдання
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
                            Виконані завдання
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

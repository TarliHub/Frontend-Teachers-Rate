import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Pagination } from "../components/Pagination/Pagination";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useList } from "../hooks/useList";
import { ITaskList } from "../types/Task.interface";
import { TaskList } from "../components/TaskList/TaskList";
import { TaskListCompleted } from "../components/TaskListCompleted/TaskListCompleted";

export function Tasks(): JSX.Element {
    const [taskFilter, setTaskFilter] = useState("tasks");
    const [currentPage, setCurrentPage] = useState(0);

    const { role } = useContext(AuthContext);

    const { data } = useList<ITaskList>(taskFilter, currentPage, taskFilter);

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
                <TaskListCompleted list={data?.items} />
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

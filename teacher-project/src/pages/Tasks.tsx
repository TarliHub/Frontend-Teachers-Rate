import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Pagination } from "../components/Pagination/Pagination";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useList } from "../hooks/useList";
import { ITaskList } from "../types/Task.interface";
import { TaskList } from "../components/TaksList/TaskList";

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
                    <>
                        <button onClick={() => setTaskFilter("tasks")}>
                            Не виконані завдання
                        </button>
                        <button
                            onClick={() =>
                                setTaskFilter("tasks/completed-tasks")
                            }
                        >
                            Виконані завдання
                        </button>
                    </>
                )}
            </div>
            <TaskList list={data?.items} />
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

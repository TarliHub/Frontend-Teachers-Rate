import { Link, useParams } from "react-router-dom";
import { useGetOne } from "../hooks/useGetOne";
import { ITaskOne } from "../types/Task.interface";
import { useContext, useState } from "react";
import { AxiosError } from "axios";
import { AuthContext } from "../context/AuthContext";

export function Task() {
    const { deleteToken } = useContext(AuthContext);
    const { id } = useParams();
    const taskId = id !== undefined ? parseInt(id) : 0;
    const [showError, setShowError] = useState(true);

    const { data, error } = useGetOne<ITaskOne>(taskId, "tasks", `task-${id}`);

    const handleContinueClick = () => {
        if (error && (error as AxiosError).response?.status === 401) {
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
                            : error.message}
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

    return (
        <div className="flex flex-col text-2xl p-3 pb-5 border-b-[2px] border-slate-300 gap-4">
            <h1 className="text-3xl font-bold">{data?.title}</h1>
            <p className="text-lg">Опис: {data?.pointsDescription}</p>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">Оцінки</h2>
                <ul className="flex flex-row text-xl gap-2 pl-5">
                    {data?.points.map((point, index) => (
                        <li key={index} className="mb-1">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
            <p className="text-lg mb-4">Підтвердження: {data?.approval}</p>
            <div>
                <h2 className="text-2xl font-semibold mb-2">Категорія</h2>
                <p className="text-lg">{data?.category.name}</p>
            </div>
            <Link
                className="p-2 ml-8 text-center flex items-center justify-center text-xl rounded-md bg-primaryBlue text-white"
                to={`/tasks/submit/${taskId}`}
            >
                Submit Task
            </Link>
        </div>
    );
}

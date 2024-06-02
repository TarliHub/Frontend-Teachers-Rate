import { Link, useParams } from "react-router-dom";
import { useGetOne } from "../hooks/useGetOne";
import { ITaskOne } from "../types/Task.interface";

export function Task() {
    const { id } = useParams();
    const taskId = id !== undefined ? parseInt(id) : 0;

    const { data, error } = useGetOne<ITaskOne>(taskId, "tasks", `task-${id}`);

    if (error) {
        return <div className="text-red-500">Error: {error.message}</div>;
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
            <p className="text-lg mb-4">Умова: {data?.approval}</p>
            <div>
                <h2 className="text-2xl font-semibold mb-2">Категорія</h2>
                <p className="text-lg">{data?.category.name}</p>
            </div>
            <Link
                className="p-2 ml-8 text-center flex items-center justify-center text-xl rounded-md bg-primaryBlue text-white"
                to={`/tasks/submit/${taskId}`}
            >
                Здати завдання
            </Link>
        </div>
    );
}

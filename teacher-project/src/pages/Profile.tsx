import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useProfile } from "../hooks/useProfile";
import { IUser } from "../types/User.interface";

export function Profile(): JSX.Element {
    const { deleteToken, token } = useContext(AuthContext);
    const { data, error, isLoading } = useProfile<IUser>(token);

    return (
        <div>
            <div className="flex flex-col text-2xl p-3 gap-2 text-primaryBlue">
                <p>{`${data?.lastName} ${data?.name} ${data?.middleName}`}</p>
                <p>Email: {data?.email}</p>
                <p>Рейтинг: {data?.points}</p>
                <p>Role: {data?.role}</p>
            </div>
            <h3 className="flex flex-row text-2xl p-3 pb-5 border-b-[2px] border-slate-300 text-secondaryBlue">
                Виконані завдання
            </h3>
            <div className="flex flex-col flex-1 lg:flex-[2] border-2 rounded-2xl border-primaryBlue m-2 p-2 font-medium">
                <div className="flex flex-row text-xl p-3 pb-5 border-b-[2px] border-slate-300 text-secondaryBlue">
                    <p className="flex-[3]">Завдання</p>
                    <p className="flex-[2]">Умова</p>
                    <div className="flex-1">Оцінка</div>
                </div>
                {data?.tasks.map((item) => {
                    return (
                        <div
                            className="flex flex-row justify-between text-lg p-3 border-b-[2px] border-slate-300"
                            key={item.id}
                        >
                            <div className="flex-[3]">
                                <p>{item.task.title}</p>
                            </div>
                            <p className="flex-[2]">{item.task.approval}</p>
                            <p className="flex-1">{item.points}</p>
                        </div>
                    );
                })}
            </div>
            <button
                className="bg-primaryBlue p-2 m-4 rounded-md text-white hover:bg-secondaryBlue text-center"
                onClick={() => deleteToken()}
            >
                Вийти з акаунта
            </button>
        </div>
    );
}

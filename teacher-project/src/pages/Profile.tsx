import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useProfile } from "../hooks/useProfile";
import { IUser } from "../types/User.interface";
import { AxiosError } from "axios";

export function Profile(): JSX.Element {
    const { deleteToken, token } = useContext(AuthContext);
    const { data, error } = useProfile<IUser>(token);
    const [showError, setShowError] = useState(true);

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
        <div>
            <div className="flex flex-col text-2xl p-3 gap-2 text-primaryBlue">
                <p>{`${data?.lastName} ${data?.name} ${data?.middleName}`}</p>
                <p>Email: {data?.email}</p>
                <p>Рейтинг: {data?.points}</p>
            </div>
            <h3 className="flex flex-row text-2xl p-3 pb-5 border-b-[2px] border-slate-300 text-secondaryBlue">
                Виконані показники
            </h3>
            <div className="flex flex-col flex-1 lg:flex-[2] border-2 rounded-2xl border-primaryBlue m-2 p-2 font-medium">
                <div className="flex flex-row text-xl p-3 pb-5 border-b-[2px] border-slate-300 text-secondaryBlue">
                    <p className="flex-[3]">Показник</p>
                    <p className="flex-[2]">Підтвердження</p>
                    <div className="flex-1">Бал</div>
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

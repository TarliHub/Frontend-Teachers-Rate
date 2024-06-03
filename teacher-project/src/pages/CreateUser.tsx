import { Link } from "react-router-dom";
import { useCreateOne } from "../hooks/useCreateOne";
import { UserForm } from "../components/UserForm/UserForm";
import { ROUTES } from "../constants/routes";
import { IUser } from "../types/User.interface";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { AxiosError } from "axios";

export function CreateUser(): JSX.Element {
    const { role, deleteToken } = useContext(AuthContext);
    const [error, setError] = useState<string | null>(null);
    const [errorCode, setErrorCode] = useState<number | null>(null);

    const CreateUser = useCreateOne<IUser>(
        role === 1 ? "teachers" : "central-comision",
        "teachers"
    );

    const handleCreateUser = (data: IUser) => {
        CreateUser.mutate(
            {
                data,
                route: role === 1 ? "teachers" : "head-teachers",
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
            <Link to={ROUTES.TEACHERS}>Назад</Link>
            <UserForm handleUser={handleCreateUser} />
        </div>
    );
}

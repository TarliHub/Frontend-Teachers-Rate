import { Link, useParams } from "react-router-dom";
import { useGetOne } from "../hooks/useGetOne";
import { UserForm } from "../components/UserForm/UserForm";
import { ROUTES } from "../constants/routes";
import { IUser } from "../types/User.interface";
import { useUpdateOne } from "../hooks/useUpdateOne";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { AxiosError } from "axios";

export function UpdateUser(): JSX.Element {
    const { role, deleteToken } = useContext(AuthContext);
    const { id } = useParams();
    const userId = id !== undefined ? parseInt(id) : 0;

    const [error, setError] = useState<string | null>(null);
    const [errorCode, setErrorCode] = useState<number | null>(null);
    const [showError, setShowError] = useState(true);

    const GetOneUser = useGetOne<IUser>(
        userId,
        role === 1 ? "teachers" : "head-teachers",
        role === 1 ? "teachers" : "central-comision"
    );

    const UpdateUser = useUpdateOne<IUser>(
        role === 1 ? "teachers" : "central-comision"
    );

    const handleUpdateUser = (data: IUser) => {
        UpdateUser.mutate(
            {
                data,
                id: userId,
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
        } else if ((GetOneUser.error as AxiosError).response?.status === 401) {
            deleteToken();
        } else {
            setError("");
            setErrorCode(0);
            setShowError(false);
        }
        setError(null);
        setErrorCode(null);
    };

    if (GetOneUser.error && showError) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-red-600 mb-4">
                        {(GetOneUser.error as AxiosError).response?.status ===
                        401
                            ? "Час авторизації вийшов"
                            : GetOneUser.error.message}
                    </p>
                    <button
                        className="bg-primaryBlue p-2 rounded-md text-white hover:bg-secondaryBlue"
                        onClick={handleErrorButtonClick}
                    >
                        Продовжити
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Link to={ROUTES.TEACHERS}>Назад</Link>
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
            <UserForm
                updateForm={true}
                handleUser={handleUpdateUser}
                userData={GetOneUser.data}
            />
        </div>
    );
}

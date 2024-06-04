import styles from "./UserList.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { IUser } from "../../types/User.interface";
import { useDeleteOne } from "../../hooks/useDeleteOne";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { AxiosError } from "axios";

interface IUserContainer {
    userData: IUser;
    customLinkRoute?: string;
}

export function UserContainer({ userData, customLinkRoute }: IUserContainer) {
    const { role, deleteToken } = useContext(AuthContext);
    const [error, setError] = useState<string | null>(null);
    const [errorCode, setErrorCode] = useState<number | null>(null);

    const DeleteUser = useDeleteOne<void>(
        role === 1 ? "teachers" : "central-comision"
    );

    const handleDelete = (id: number) => {
        const route = role === 1 ? "teachers" : "head-teachers";
        DeleteUser.mutate(
            {
                id,
                route,
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
            <div className={styles.userContainer}>
                <div className="flex-[3]">
                    <Link
                        to={`${ROUTES.TEACHERS}${customLinkRoute}/${userData.id}`}
                    >
                        {`${userData.lastName} ${userData.name}`}
                    </Link>
                </div>
                <p className="flex-1">{userData.points}</p>

                <div className={styles.buttonContainer}>
                    <Link
                        to={`${ROUTES.TEACHERS}${ROUTES.UPDATE_USER}/${userData.id}`}
                        title="Змінити дані акаунта"
                    >
                        <span className="material-symbols-outlined">edit</span>
                    </Link>
                    <button
                        onClick={() => handleDelete(userData.id)}
                        title="Видалити акаунт"
                    >
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

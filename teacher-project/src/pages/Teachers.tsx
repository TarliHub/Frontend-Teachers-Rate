import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { ROUTES } from "../constants/routes";
import { useList } from "../hooks/useList";
import { AuthContext } from "../context/AuthContext";
import { UsersList } from "../components/UsersList/UsersList";
import { Pagination } from "../components/Pagination/Pagination";
import { IUsersList } from "../types/User.interface";
import downloadExcel from "../misc/downloadExcel";
import { AxiosError } from "axios";

export function Teachers(): JSX.Element {
    const [currentPage, setCurrentPage] = useState(0);
    const [showError, setShowError] = useState(true);

    const { role, token, deleteToken } = useContext(AuthContext);

    const UsersData = useList<IUsersList>(
        role === 1 ? "teachers" : "head-teachers",
        currentPage,
        role === 1 ? "teachers" : "central-comision"
    );

    const handleContinueClick = () => {
        if (
            UsersData.error &&
            (UsersData.error as AxiosError).response?.status === 401
        ) {
            deleteToken();
        } else {
            setShowError(false);
        }
    };

    if (UsersData.error && showError) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-red-600 mb-4">
                        {(UsersData.error as AxiosError).response?.status ===
                        401
                            ? "Час авторизації вийшов"
                            : UsersData.error.message}
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
            <div className="flex justify-end m-4">
                <Link
                    className=" flex items-center gap-1 text-secondaryBlue cursor-pointer"
                    to={`${ROUTES.TEACHERS}${ROUTES.CREATE_USER}`}
                >
                    <span className="material-symbols-outlined text-3xl">
                        add
                    </span>
                    <p className="text-lg font-medium">СТВОРИТИ</p>
                </Link>
                {role === 0 && (
                    <button
                        className="p-2 ml-8 text-center flex items-center justify-center text-xl rounded-md bg-primaryBlue text-white"
                        onClick={() => {
                            void downloadExcel(token);
                        }}
                    >
                        Скачати Excel
                    </button>
                )}
            </div>
            <div className="flex flex-row">
                <UsersList
                    usersData={UsersData.data?.items}
                    customLinkRoute={role === 0 ? ROUTES.CENTRAL_COMISION : ""}
                />
            </div>
            <div>
                <Pagination
                    totalPages={UsersData.data?.totalPages}
                    currentPage={currentPage}
                    setPage={setCurrentPage}
                />
            </div>
        </div>
    );
}

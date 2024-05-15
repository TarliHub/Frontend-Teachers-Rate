import { Link } from "react-router-dom";

import { ROUTES } from "../constants/routes";

import { useList } from "../hooks/useList";

import { UsersList } from "../components/UsersList/UsersList";
import { Pagination } from "../components/Pagination/Pagination";

import { IUsersList } from "../types/User.interface";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export function Teachers(): JSX.Element {
    const [currentPage, setCurrentPage] = useState(0);

    const { role } = useContext(AuthContext);

    const UsersData = useList<IUsersList>(
        role === 1 ? "teachers" : "head-teachers",
        currentPage,
        role === 1 ? "teachers" : "central-comision"
    );

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
            </div>
            <div className="flex flex-row">
                <UsersList usersData={UsersData.data?.items} />
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

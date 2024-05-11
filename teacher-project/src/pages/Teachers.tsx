import { Link } from "react-router-dom";

import { ROUTES } from "../constants/routes";

import { useList } from "../hooks/useList";

import { UsersList } from "../components/UsersList/UsersList";
import { Pagination } from "../components/Pagination/Pagination";

import { IUsersList } from "../types/User.interface";
import { useState } from "react";

export function Teachers(): JSX.Element {
    const [page, setPage] = useState<number>(0);

    const UsersData = useList<IUsersList>("head-teachers", page);
    console.log(UsersData.data?.count);

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
                <div className="lg:bg-black lg:flex-1"></div>
                <UsersList usersData={UsersData.data} />
            </div>
            <div>
                <Pagination
                    totalPages={UsersData.data?.count}
                    setPage={setPage}
                    page={page}
                />
            </div>
        </div>
    );
}

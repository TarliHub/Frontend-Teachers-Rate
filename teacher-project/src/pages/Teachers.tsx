import { Link } from "react-router-dom";

import { ROUTES } from "../constants/routes";

import { UsersList } from "../components/UsersList/UsersList";

import { useUsersList } from "../hooks/useUsersList";

export function Teachers(): JSX.Element {
    const HeadTeachersList = useUsersList("head-teachers");

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
                <UsersList usersData={HeadTeachersList.data} />
            </div>
        </div>
    );
}

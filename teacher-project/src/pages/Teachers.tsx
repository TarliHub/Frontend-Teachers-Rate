import { Link } from "react-router-dom";

import { ROUTES } from "../constants/routes";

import { UsersList } from "../components/UsersList/UsersList";
import { usersData } from "../constants/fakeData";

export function Teachers(): JSX.Element {
    return (
        <div>
            <div>
                <Link to={`${ROUTES.TEACHERS}/create-user`}>
                    Створити користувача
                </Link>
            </div>
            <div className="flex flex-row">
                <div className="lg:bg-black lg:flex-1"></div>
                <UsersList usersData={usersData} />
            </div>
        </div>
    );
}

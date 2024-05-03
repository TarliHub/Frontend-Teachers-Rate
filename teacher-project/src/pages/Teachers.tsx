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
                {/* Search block */}
            </div>
            <div>
                <UsersList usersData={usersData} />
            </div>
        </div>
    );
}

import { Link } from "react-router-dom";

import { ROUTES } from "../constants/routes";

export function ManageTeachers(): JSX.Element {
    return (
        <div>
            <Link to={`${ROUTES.MANAGE_TEACHERS}/create-user`}>Створити користувача</Link>
        </div>
    );
}

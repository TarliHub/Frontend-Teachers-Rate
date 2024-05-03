import { Link } from "react-router-dom";

import { ROUTES } from "../constants/routes";

export function Teachers(): JSX.Element {
    return (
        <div>
            <Link to={`${ROUTES.TEACHERS}/create-user`}>
                Створити користувача
            </Link>
        </div>
    );
}

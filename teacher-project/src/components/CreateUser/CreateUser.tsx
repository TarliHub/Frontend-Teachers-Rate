import { Link } from "react-router-dom";
import { UserForm } from "../UserForm/UserForm";
import { ROUTES } from "../../constants/routes";

export function CreateUser(): JSX.Element {
    return (
        <div>
            <Link to={ROUTES.TEACHERS}>Назад</Link>
            <UserForm />
        </div>
    );
}

import { Link } from "react-router-dom";
import { UserForm } from "../components/UserForm/UserForm";
import { ROUTES } from "../constants/routes";
import { fakeUser } from "../constants/fakeData";

export function UpdateUser(): JSX.Element {
    /*TODO: Add GetOne User method with React Query */
    return (
        <div>
            <Link to={ROUTES.TEACHERS}>Назад</Link>
            <UserForm userData={fakeUser} />
        </div>
    );
}

import { Link, useParams } from "react-router-dom";
import { useGetOne } from "../hooks/useGetOne";

import { UserForm } from "../components/UserForm/UserForm";

import { ROUTES } from "../constants/routes";

import { IUser } from "../types/User.interface";

export function UpdateUser(): JSX.Element {
    const { id } = useParams();

    const GetOneUser = useGetOne<IUser>(id ? parseInt(id) : 0, "head-teachers");

    return (
        <div>
            <Link to={ROUTES.TEACHERS}>Назад</Link>
            <UserForm userData={GetOneUser.data} />
        </div>
    );
}

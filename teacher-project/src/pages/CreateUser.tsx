import { Link } from "react-router-dom";

import { useCreateOne } from "../hooks/useCreateOne";

import { UserForm } from "../components/UserForm/UserForm";

import { ROUTES } from "../constants/routes";

import { IUser } from "../types/User.interface";

export function CreateUser(): JSX.Element {
    const CreateUser = useCreateOne<IUser>("central-comision");

    const handleCreateUser = (data: IUser) => {
        CreateUser.mutate({ data, route: "head-teachers" });
    };

    return (
        <div>
            <Link to={ROUTES.TEACHERS}>Назад</Link>
            <UserForm handleUser={handleCreateUser} />
        </div>
    );
}

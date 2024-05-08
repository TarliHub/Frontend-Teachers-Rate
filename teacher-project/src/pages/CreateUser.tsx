import { Link } from "react-router-dom";

import { useCreateUser } from "../hooks/useCreateUser";

import { UserForm } from "../components/UserForm/UserForm";

import { ROUTES } from "../constants/routes";

import { IUserFields } from "../types/User.interface";

export function CreateUser(): JSX.Element {
    const CreateUser = useCreateUser();

    const handleCreateUser = (userData: IUserFields) => {
        CreateUser.mutate({ userData, route: "head-teachers" });
    };

    return (
        <div>
            <Link to={ROUTES.TEACHERS}>Назад</Link>
            <UserForm handleUser={handleCreateUser} />
        </div>
    );
}

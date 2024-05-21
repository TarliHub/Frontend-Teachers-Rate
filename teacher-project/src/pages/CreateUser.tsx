import { Link } from "react-router-dom";

import { useCreateOne } from "../hooks/useCreateOne";

import { UserForm } from "../components/UserForm/UserForm";

import { ROUTES } from "../constants/routes";

import { IUser } from "../types/User.interface";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export function CreateUser(): JSX.Element {
    const { role } = useContext(AuthContext);

    const CreateUser = useCreateOne<IUser>(
        role === 1 ? "teachers" : "central-comision",
        "teachers"
    );

    const handleCreateUser = (data: IUser) => {
        CreateUser.mutate({
            data,
            route: role === 1 ? "teachers" : "head-teachers",
        });
    };

    return (
        <div>
            <Link to={ROUTES.TEACHERS}>Назад</Link>
            <UserForm handleUser={handleCreateUser} />
        </div>
    );
}

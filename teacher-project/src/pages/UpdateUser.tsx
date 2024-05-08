import { Link, useParams } from "react-router-dom";
import { useGetOne } from "../hooks/useGetOne";

import { UserForm } from "../components/UserForm/UserForm";

import { ROUTES } from "../constants/routes";

import { IUser } from "../types/User.interface";
import { useUpdateOne } from "../hooks/useUpdateOne";

export function UpdateUser(): JSX.Element {
    const { id } = useParams();
    const userId = id !== undefined ? parseInt(id) : 0;

    const GetOneUser = useGetOne<IUser>(id ? parseInt(id) : 0, "head-teachers");

    const UpdateUser = useUpdateOne<IUser>();

    const handleUpdateUser = (data: IUser) => {
        UpdateUser.mutate({ data, id: userId, route: "head-teachers" });
    };
    return (
        <div>
            <Link to={ROUTES.TEACHERS}>Назад</Link>
            <UserForm
                handleUser={handleUpdateUser}
                userData={GetOneUser.data}
            />
        </div>
    );
}

import { useParams } from "react-router-dom";
import { useGetOne } from "../hooks/useGetOne";

import { IUser } from "../types/User.interface";

import { UsersList } from "../components/UsersList/UsersList";
import { ROUTES } from "../constants/routes";
import { CentralComisionInfo } from "../components/CentralComisionInfo/CentralComisionInfo";

export function CentralComision(): JSX.Element {
    const { id } = useParams();

    const { data } = useGetOne<IUser>(
        id ? parseInt(id) : 0,
        "head-teachers",
        "central-comision"
    );

    return (
        <div>
            <CentralComisionInfo
                name={`${data?.lastName} ${data?.name} ${data?.middleName}`}
                comissionName={data?.commissionName}
            />
            <UsersList
                usersData={data?.teachers}
                customLinkRoute={`${ROUTES.TEACHER}`}
            />
        </div>
    );
}

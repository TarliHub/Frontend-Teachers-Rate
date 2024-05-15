import { useParams } from "react-router-dom";
import { useGetOne } from "../hooks/useGetOne";

import { IUser } from "../types/User.interface";

import { HeadTeacherList } from "../components/HeadTeacherList/HeadTeacherList";

export function CentralComision(): JSX.Element {
    const { id } = useParams();

    const GetOneUser = useGetOne<IUser>(
        id ? parseInt(id) : 0,
        "head-teachers",
        "central-comision"
    );

    return (
        <div>
            {/* Info about Head of Central Comision */}
            <HeadTeacherList teachersList={GetOneUser.data?.teachers} />
        </div>
    );
}

import { useParams } from "react-router-dom";
import { useGetOne } from "../hooks/useGetOne";
import { IUser } from "../types/User.interface";
import { UserProfile } from "../components/UserProfile/UserProfile";

export function OtherProfileCH() {
    const { id } = useParams();

    const GetOneUser = useGetOne<IUser>(
        id ? parseInt(id) : 0,
        "head-teachers",
        "central-commision"
    );

    return (
        <div>
            <UserProfile data={GetOneUser.data} />
        </div>
    );
}

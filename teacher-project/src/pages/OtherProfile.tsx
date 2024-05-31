import { useParams } from "react-router-dom";
import { useGetOne } from "../hooks/useGetOne";
import { IUser } from "../types/User.interface";
import { UserProfile } from "../components/UserProfile/UserProfile";

export function OtherProfile() {
    const { id } = useParams();

    const GetOneUser = useGetOne<IUser>(
        id ? parseInt(id) : 0,
        "teachers",
        "teachers"
    );
    console.log(GetOneUser.data);

    return (
        <div>
            <UserProfile data={GetOneUser.data} />
        </div>
    );
}

import { useParams } from "react-router-dom";
import { useGetOne } from "../hooks/useGetOne";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { IUser } from "../types/User.interface";

export function Teacher() {
    const { role } = useContext(AuthContext);

    const { id } = useParams();

    const GetOneUser = useGetOne<IUser>(
        id ? parseInt(id) : 0,
        role === 1 ? "teachers" : "head-teachers",
        role === 1 ? "teachers" : "central-comision"
    );

    return <div></div>;
}

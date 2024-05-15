import styles from "./UserList.module.scss";

import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import { IUser } from "../../types/User.interface";
import { useDeleteOne } from "../../hooks/useDeleteOne";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

interface IUserContainer {
    userData: IUser;
}

export function UserContainer({ userData }: IUserContainer) {
    const { role } = useContext(AuthContext);

    const DeleteUser = useDeleteOne<void>(
        role === 1 ? "teachers" : "central-comision"
    );

    return (
        <div className={styles.userContainer}>
            <div className="flex-[3]">
                <Link to={`${ROUTES.TEACHER}/${userData.id}`}>
                    {`${userData.lastName} ${userData.name}`}
                </Link>
            </div>
            <p className="flex-1">{userData.points}</p>

            <div className={styles.buttonContainer}>
                <Link
                    to={`${ROUTES.TEACHERS}${ROUTES.UPDATE_USER}/${userData.id}`}
                    title="Змінити дані акаунта"
                >
                    <span className="material-symbols-outlined">edit</span>
                </Link>
                <button
                    onClick={() => {
                        const route = role === 1 ? "teachers" : "head-teachers";
                        DeleteUser.mutate({
                            id: userData.id,
                            route: route,
                        });
                    }}
                    title="Видалити акаунт"
                >
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>
        </div>
    );
}

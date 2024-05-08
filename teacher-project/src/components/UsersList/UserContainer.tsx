import styles from "./UserList.module.scss";

import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import { IUser } from "../../types/User.interface";
import { useDeleteOne } from "../../hooks/useDeleteOne";

interface IUserContainer {
    userData: IUser;
}

export function UserContainer({ userData }: IUserContainer) {
    const DeleteUser = useDeleteOne();

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
                        DeleteUser.mutate({
                            id: userData.id,
                            route: "head-teachers",
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

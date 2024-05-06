import styles from "./UserList.module.scss";

import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

//TODO: Interface

export function UserContainer({ userData }) {
    return (
        <div className={styles.userContainer}>
            <div className="flex-[3]">
                <Link to={`${ROUTES.TEACHER}/${userData.id}`}>
                    {`${userData.lastName} ${userData.name}`}
                </Link>
            </div>
            <p className="flex-1">{userData.rating}</p>

            <div className={styles.buttonContainer}>
                <Link
                    to={`${ROUTES.TEACHERS}${ROUTES.UPDATE_USER}`}
                    title="Змінити дані акаунта"
                >
                    <span className="material-symbols-outlined">edit</span>
                </Link>
                <button title="Видалити акаунт">
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>
        </div>
    );
}

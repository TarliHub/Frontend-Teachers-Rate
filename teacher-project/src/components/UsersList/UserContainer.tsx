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
                <button title="Змінити дані акаунта">
                    <span className="material-symbols-outlined">edit</span>
                </button>
                <button title="Видалити акаунт">
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>
        </div>
    );
}

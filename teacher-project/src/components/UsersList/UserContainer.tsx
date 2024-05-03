import styles from "./UserList.module.scss";

import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

export function UserContainer({ userData }) {
    return (
        <div className={styles.userContainer}>
            <div className="flex-1">
                <Link to={`${ROUTES.TEACHER}/${userData.id}`}>
                    {`${userData.lastName} ${userData.name}`}
                </Link>
            </div>
            <p className="flex-1">{userData.rating}</p>
            
            <button>delete</button>
        </div>
    );
}

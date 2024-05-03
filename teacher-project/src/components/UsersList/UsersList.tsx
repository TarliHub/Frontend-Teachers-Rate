import React from "react";

import styles from "./UserList.module.scss";

import { IUsersList } from "../../types/User.interface";
import UserService from "../../services/User.service";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

interface IUsersListProps {
    usersData?: IUsersList[];
}

export function UsersList({ usersData }: IUsersListProps): JSX.Element {
    return (
        <div className={styles.usersList}>
            {usersData?.map((item, index) => (
                <React.Fragment key={index}>
                    {item.items.map((item, index) => (
                        <div className={styles.userBlock} key={index}>
                            <NavLink to={`${ROUTES.TEACHERS}/update-user`}>
                                <p>
                                    {item.lastName}
                                    {item.name}
                                </p>
                            </NavLink>
                            <p>{item.rating}</p>
                            <button
                                onClick={() =>
                                    UserService.deleteUser(index + 2)
                                }
                            >
                                delete
                            </button>
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

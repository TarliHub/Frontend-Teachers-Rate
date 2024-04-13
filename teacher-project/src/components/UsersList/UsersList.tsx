import React from "react";
import { IUsersList } from "../../types/User.interface";
import styles from "./UserList.module.scss";
import UserService from "../../services/User.service";

interface IUsersListProps {
    usersData?: IUsersList[];
}

export function UsersList({ usersData }: IUsersListProps): JSX.Element {
    return (
        <div>
            {usersData?.map((item, index) => (
                <React.Fragment key={index}>
                    {item.items.map((item, index) => (
                        <div key={index}>
                            <p>{`${item.lastName} ${item.name}`}</p>
                            <p>{item.rating}</p>
                            <button
                                onClick={() => UserService.deleteUser(index + 2)}
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

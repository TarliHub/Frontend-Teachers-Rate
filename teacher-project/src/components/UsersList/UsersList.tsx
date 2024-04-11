import React from "react";
import { IUsersList } from "../../types/User.interface";
import styles from "./UserList.module.scss";

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
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

import React from "react";

import styles from "./UserList.module.scss";

import { IUser } from "../../types/User.interface";

import { UserContainer } from "./UserContainer";

interface IUsersListProps {
    usersData?: IUser[];
    customLinkRoute?: string;
}

export function UsersList({
    usersData,
    customLinkRoute,
}: IUsersListProps): JSX.Element {

    return (
        <div className={styles.usersList}>
            <div className={styles.header}>
                <p className="flex-[3]">Викладач</p>
                <p className="flex-[2]">Рейтинг</p>
                <div className="flex-1"></div>
            </div>
            <React.Fragment>
                {usersData?.map((item, index) => (
                    <UserContainer
                        customLinkRoute={customLinkRoute}
                        key={index}
                        userData={item}
                    />
                ))}
            </React.Fragment>
        </div>
    );
}

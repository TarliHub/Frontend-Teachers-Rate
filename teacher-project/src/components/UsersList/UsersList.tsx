import React from "react";

import styles from "./UserList.module.scss";

import { InfiniteData } from "@tanstack/react-query";

import { IUsersList } from "../../types/User.interface";

import { UserContainer } from "./UserContainer";

interface IUsersListProps {
    usersData?: InfiniteData<IUsersList>;
}

export function UsersList({ usersData }: IUsersListProps): JSX.Element {
    return (
        <div className={styles.usersList}>
            <div className={styles.header}>
                <p className="flex-[3]">Викладач</p>
                <p className="flex-[2]">Рейтинг</p>
                <div className="flex-1"></div>
            </div>
            <React.Fragment>
                {usersData?.pages.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.items.map((item, index) => (
                            <UserContainer key={index} userData={item} />
                        ))}
                    </React.Fragment>
                ))}
            </React.Fragment>
        </div>
    );
}

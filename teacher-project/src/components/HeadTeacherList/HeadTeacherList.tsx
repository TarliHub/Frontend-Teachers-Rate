import { IUser } from "../../types/User.interface";

import { UsersList } from "../UsersList/UsersList";

interface IHeadTeacherListProps {
    teachersList?: IUser[];
}

export function HeadTeacherList({
    teachersList,
}: IHeadTeacherListProps): JSX.Element {
    return (
        <div>
            <div></div>
            <UsersList
                usersData={teachersList}
                customLinkRoute={""}
            />
        </div>
    );
}

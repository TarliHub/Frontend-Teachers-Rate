import { useUsersList } from "../hooks/useUsersList";

export function Main(): JSX.Element {
    const UsersList = useUsersList();
    console.log(UsersList.data);

    return (
        <div>

        </div>
    );
}

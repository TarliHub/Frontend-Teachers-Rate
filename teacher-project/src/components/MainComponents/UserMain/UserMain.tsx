import { CompletedTasks } from "../../CompletedTasks/CompletedTasks";
import { UserRaiting } from "../../UserRaiting/UserRaiting";
import styles from "./UserMain.module.scss";

export function UserMain(): JSX.Element {
    return (
        <div>
            <UserRaiting />
            <CompletedTasks />
        </div>
    );
}

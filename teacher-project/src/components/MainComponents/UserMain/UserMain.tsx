import { CompletedTasks } from "../../CompletedTasks/CompletedTasks";
import { UserRaiting } from "../../UserRaiting/UserRaiting";
import styles from "./UserMain.module.scss";

export function UserMain(): JSX.Element {
    return (
        <div className="flex items-center justify-center">
            <UserRaiting />
            <CompletedTasks />
        </div>
    );
}

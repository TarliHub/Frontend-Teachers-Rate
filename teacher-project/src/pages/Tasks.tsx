import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export function Tasks(): JSX.Element {
    return (
        <div>
            <Link
                className=" flex items-center gap-1 text-secondaryBlue cursor-pointer"
                to={`${ROUTES.TASKS}/create-task`}
            >
                <span className="material-symbols-outlined text-3xl">add</span>
                <p className="text-lg font-medium">СТВОРИТИ</p>
            </Link>
        </div>
    );
}

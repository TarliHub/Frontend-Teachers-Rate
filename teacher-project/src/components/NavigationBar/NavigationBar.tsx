import { NavigationBarBlock } from "./NavigationBarBlock";

import {
    adminNavigation,
    cCNavigation,
    userNavigation,
} from "../../constants/navigationData";

interface INavigationBarProps {
    role?: string;
}

export function NavigationBar({ role }: INavigationBarProps): JSX.Element {
    if (role === "0") {
        return <NavigationBarBlock navigationData={adminNavigation} />;
    }

    return <NavigationBarBlock navigationData={cCNavigation} />;
}

import { NavigationBarBlock } from "./NavigationBarBlock";

import {
    adminNavigation,
    cCNavigation,
    userNavigation,
} from "../../constants/navigationData";

interface INavigationBarProps {
    role: number;
}

export function NavigationBar({ role }: INavigationBarProps): JSX.Element {
    if (role === 0) {
        return <NavigationBarBlock navigationData={adminNavigation} />;
    }

    if (role === 1) {
        return <NavigationBarBlock navigationData={cCNavigation} />;
    }

    return <NavigationBarBlock navigationData={userNavigation} />;
}

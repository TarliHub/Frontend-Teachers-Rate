import { NavigationBarBlock } from "./NavigationBarBlock";

import {
    adminNavigation,
    cCNavigation,
    userNavigation,
} from "../../constants/navigationData";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export function NavigationBar(): JSX.Element {
    const { role } = useContext(AuthContext);

    if (role === 0) {
        return <NavigationBarBlock navigationData={adminNavigation} />;
    }

    if (role === 1) {
        return <NavigationBarBlock navigationData={cCNavigation} />;
    }

    return <NavigationBarBlock navigationData={userNavigation} />;
}

import {
    adminNavigation,
    cCNavigation,
    userNavigation,
} from "../../constants/navigationData";
import { INavigation } from "../../types/Navigation";
import { NavigationBarBlock } from "./NavigationBarBlock";

interface INavigationBarProps {
    role: "CentralComision" | "Admin" | "User";
}

interface IRoleNavigation {
    CentralComision: INavigation[];
    Admin: INavigation[];
    User: INavigation[];
}

const roleProps: IRoleNavigation = {
    CentralComision: cCNavigation,
    Admin: adminNavigation,
    User: userNavigation,
};

export function NavigationBar({ role }: INavigationBarProps): JSX.Element {
    const navigationData = roleProps[role as keyof IRoleNavigation];
    return <NavigationBarBlock navigationData={navigationData} />;
}

import { NavigationBarAdmin } from "./NavigationBarAdmin";
import { NavigationBarCC } from "./NavigationBarCC";
import { NavigationBarUser } from "./NavigationBarUser";

interface INavigationBarProps {
    role: "CentralComision" | "Admin" | "User";
}

interface IRoleComponents {
    CentralComision: () => JSX.Element;
    Admin: () => JSX.Element;
    User: () => JSX.Element;
}

const roleComponents: IRoleComponents = {
    CentralComision: NavigationBarCC,
    Admin: NavigationBarAdmin,
    User: NavigationBarUser,
};

export function NavigationBar({ role }: INavigationBarProps): JSX.Element {
    const Component = roleComponents[role as keyof IRoleComponents];
    return <Component />;
}

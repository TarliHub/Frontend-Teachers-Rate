import { AdminMain } from "../components/MainComponents/AdminMain/AdminMain";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";

export function Main(): JSX.Element {
    return (
        <div>
            <NavigationBar role="User"/>
            <AdminMain />
        </div>
    );
}

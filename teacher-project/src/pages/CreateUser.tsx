import { CreateUserForm } from "../components/CreateUserForm/CreateUserForm";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";

export function CreateUser(): JSX.Element {
    return (
        <div className="flex items-center justify-center w-[100svw] h-[100svh]">
            <NavigationBar role="Admin" />
            <CreateUserForm />
        </div>
    );
}

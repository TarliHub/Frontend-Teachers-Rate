import { UserForm } from "../components/UserForm/UserForm";

export function CreateUser(): JSX.Element {
    return (
        <div className="flex flex-col w-full h-full items-center">
            <UserForm />
        </div>
    );
}

import { LoginForm } from "../components/LoginForm/LoginForm";

export function Login(): JSX.Element {
    return (
        <div className="flex items-center justify-center w-[100svw] h-[100svh]">
            <LoginForm />
        </div>
    );
}

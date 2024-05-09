import { LoginForm } from "../components/LoginForm/LoginForm";

import { useLoginUser } from "../hooks/useLoginUser";

import { ILoginFields } from "../types/Auth.interface";

export function Login(): JSX.Element {
    const LoginUser = useLoginUser();

    const handleLoginUser = (data: ILoginFields) => {
        LoginUser.mutate({ data });
    };

    return (
        <div className="flex items-center justify-center w-[100svw] h-[100svh]">
            <LoginForm handleLoginUser={handleLoginUser} />
        </div>
    );
}

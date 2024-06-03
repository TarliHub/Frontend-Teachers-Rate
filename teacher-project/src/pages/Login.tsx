import { useState } from "react";
import { AxiosError } from "axios";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { useLoginUser } from "../hooks/useLoginUser";
import { ILoginFields } from "../types/Auth.interface";

export function Login(): JSX.Element {
    const LoginUser = useLoginUser();

    const [error, setError] = useState<string | null>(null);

    const handleLoginUser = (data: ILoginFields) => {
        LoginUser.mutate(
            { data },
            {
                onError: (error: AxiosError) => {
                    setError(error.message);
                },
            }
        );
    };

    const handleErrorButtonClick = () => {
        setError(null);
    };

    return (
        <div className="flex items-center justify-center w-[100svw] h-[100svh]">
            {error && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-red-600 mb-4">{error}</p>
                        <button
                            className="bg-primaryBlue p-2 rounded-md text-white hover:bg-secondaryBlue"
                            onClick={handleErrorButtonClick}
                        >
                            Продовжити
                        </button>
                    </div>
                </div>
            )}
            <LoginForm handleLoginUser={handleLoginUser} />
        </div>
    );
}

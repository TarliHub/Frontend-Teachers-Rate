import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function AdminProfile(): JSX.Element {
    const { deleteToken } = useContext(AuthContext);

    return (
        <div>
            <button
                className="bg-primaryBlue p-2 m-4 rounded-md text-white hover:bg-secondaryBlue text-center"
                onClick={() => deleteToken()}
            >
                Вийти з акаунта
            </button>
        </div>
    );
}

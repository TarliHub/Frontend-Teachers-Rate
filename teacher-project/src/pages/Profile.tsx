import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function Profile(): JSX.Element {
    const { deleteToken } = useContext(AuthContext);

    return (
        <div>
            <button onClick={() => deleteToken("token")}>Вийти з акаунта</button>
        </div>
    );
}

import { useParams } from "react-router-dom";
import { useGetOne } from "../hooks/useGetOne";
import { IUser } from "../types/User.interface";
import { UserProfile } from "../components/UserProfile/UserProfile";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AxiosError } from "axios";

export function OtherProfileCH() {
    const { id } = useParams();
    const [showError, setShowError] = useState(true);
    const { deleteToken } = useContext(AuthContext);

    const { data, error } = useGetOne<IUser>(
        id ? parseInt(id) : 0,
        "head-teachers",
        "central-commision"
    );

    const handleContinueClick = () => {
        if (error && (error as AxiosError).response?.status === 401) {
            deleteToken();
        } else {
            setShowError(false);
        }
    };

    if (error && showError) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-red-600 mb-4">
                        {(error as AxiosError).response?.status === 401
                            ? "Час авторизації вийшов"
                            : error.message}
                    </p>
                    <button
                        className="bg-primaryBlue p-2 rounded-md text-white hover:bg-secondaryBlue"
                        onClick={handleContinueClick}
                    >
                        Продовжити
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <UserProfile data={data} />
        </div>
    );
}

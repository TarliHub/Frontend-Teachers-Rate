import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { useList } from "../hooks/useList";
import { ICategoryList } from "../types/Category.interface";
import { CategoryList } from "../components/CategoryList/CategoryList";
import { AuthContext } from "../context/AuthContext";
import { AxiosError } from "axios"; // Import AxiosError type
import { useDeleteOne } from "../hooks/useDeleteOne"; // Import useDeleteOne hook

export function Category(): JSX.Element {
    const [currentPage, setCurrentPage] = useState(0);
    const [showError, setShowError] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [errorCode, setErrorCode] = useState<number | null>(null);

    const { deleteToken } = useContext(AuthContext);

    const { data, error: fetchError } = useList<ICategoryList>(
        "category",
        currentPage,
        "category"
    );

    const DeleteCategory = useDeleteOne<void>("category");

    const handleDelete = (id: number) => {
        DeleteCategory.mutate(
            {
                id,
                route: "category",
            },
            {
                onError: (error: AxiosError) => {
                    if (error.response?.status === 401) {
                        setError("Час авторизації вийшов. Увійдіть знову.");
                        setErrorCode(401);
                    } else {
                        setError(error.message);
                        setErrorCode(error.response?.status || null);
                    }
                },
            }
        );
    };

    const handleContinueClick = () => {
        if (errorCode === 401) {
            deleteToken();
        } else {
            setShowError(false);
        }
        setError(null);
        setErrorCode(null);
    };

    if (fetchError && showError) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-red-600 mb-4">
                        {(fetchError as AxiosError).response?.status === 401
                            ? "Час авторизації вийшов"
                            : fetchError.message}
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
            {error && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-red-600 mb-4">{error}</p>
                        <button
                            className="bg-primaryBlue p-2 rounded-md text-white hover:bg-secondaryBlue"
                            onClick={handleContinueClick}
                        >
                            Продовжити
                        </button>
                    </div>
                </div>
            )}
            <div className="flex justify-end m-4">
                <Link
                    className="flex items-center gap-1 text-secondaryBlue cursor-pointer"
                    to="/category/create-category"
                >
                    <span className="material-symbols-outlined text-3xl">
                        add
                    </span>
                    <p className="text-lg font-medium">СТВОРИТИ</p>
                </Link>
            </div>
            <CategoryList list={data?.items} handleDelete={handleDelete} />
            <div>
                <Pagination
                    totalPages={data?.totalPages}
                    currentPage={currentPage}
                    setPage={setCurrentPage}
                />
            </div>
        </div>
    );
}

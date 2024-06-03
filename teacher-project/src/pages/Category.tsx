import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { useList } from "../hooks/useList";
import { ICategoryList } from "../types/Category.interface";
import { CategoryList } from "../components/CategoryList/CategoryList";
import { AuthContext } from "../context/AuthContext";
import { AxiosError } from "axios"; // Імпортуємо тип AxiosError

export function Category(): JSX.Element {
    const [currentPage, setCurrentPage] = useState(0);
    const [showError, setShowError] = useState(true);

    const { deleteToken } = useContext(AuthContext);

    const { data, error } = useList<ICategoryList>(
        "category",
        currentPage,
        "category"
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
            <div className="flex justify-end m-4">
                <Link
                    className=" flex items-center gap-1 text-secondaryBlue cursor-pointer"
                    to="/category/create-category"
                >
                    <span className="material-symbols-outlined text-3xl">
                        add
                    </span>
                    <p className="text-lg font-medium">СТВОРИТИ</p>
                </Link>
            </div>
            <CategoryList list={data?.items} />
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

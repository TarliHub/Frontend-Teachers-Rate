import { Link } from "react-router-dom";
import { Pagination } from "../components/Pagination/Pagination";
import { useList } from "../hooks/useList";
import { useState } from "react";
import { ICategoryList } from "../types/Category.interface";
import { CategoryList } from "../components/CategoryList/CategoryList";

export function Category(): JSX.Element {
    const [currentPage, setCurrentPage] = useState(0);

    const { data } = useList<ICategoryList>(
        "category",
        currentPage,
        "category"
    );

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

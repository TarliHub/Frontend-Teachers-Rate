import styles from "./Pagination.module.scss";
import { Dispatch, SetStateAction } from "react";

interface IPaginationProps {
    totalPages?: number;
    currentPage: number;
    setPage: Dispatch<SetStateAction<number>>;
}

export function Pagination({
    totalPages,
    currentPage,
    setPage,
}: IPaginationProps) {
    if (totalPages) {
        const pageNumbers = Array.from(
            { length: totalPages },
            (_, index) => index
        );

        return (
            <ul className={styles.pagination}>
                {pageNumbers.map((pageNumber) => (
                    <li
                        key={pageNumber}
                        className={`${styles.pageItem} ${
                            pageNumber === currentPage ? styles.active : ""
                        }`}
                        onClick={() => {
                            setPage(pageNumber);
                        }}
                    >
                        {pageNumber + 1}
                    </li>
                ))}
            </ul>
        );
    }
    return <></>;
}

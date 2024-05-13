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
        let startPage = Math.max(0, currentPage - 1);
        const endPage = Math.min(startPage + 3, totalPages - 1);
        if (endPage - startPage < 3) {
            startPage = Math.max(0, endPage - 3);
        }

        const pageNumbers = Array.from(
            { length: endPage - startPage + 1 },
            (_, index) => startPage + index
        );

        return (
            <ul className={styles.pagination}>
                <li
                    className={`${styles.pageItem} ${
                        currentPage === 0 ? styles.disabled : ""
                    }`}
                    onClick={() => {
                        if (currentPage !== 0) {
                            setPage(currentPage - 1);
                        }
                    }}
                >
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                </li>

                {currentPage > 1 && (
                    <li
                        className={`${styles.pageItem}`}
                        onClick={() => setPage(0)}
                    >
                        1
                    </li>
                )}

                {currentPage > 1 && totalPages > 4 && (
                    <li className={`${styles.pageItem}`} onClick={() => {}}>
                        ...
                    </li>
                )}

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

                {currentPage < totalPages - 2 && totalPages > 4 && (
                    <li className={`${styles.pageItem}`} onClick={() => {}}>
                        ...
                    </li>
                )}

                {currentPage < totalPages - 2 && (
                    <li
                        className={`${styles.pageItem}`}
                        onClick={() => setPage(totalPages - 1)}
                    >
                        {totalPages}
                    </li>
                )}

                <li
                    className={`${styles.pageItem} ${
                        currentPage === totalPages - 1 ? styles.disabled : ""
                    }`}
                    onClick={() => {
                        if (currentPage !== totalPages - 1) {
                            setPage(currentPage + 1);
                        }
                    }}
                >
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </li>
            </ul>
        );
    }
    return <></>;
}

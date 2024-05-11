import styles from "./Pagination.module.scss";

import { Dispatch, SetStateAction } from "react";

interface IPaginationProps {
    totalPages?: number;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}

export function Pagination({ totalPages, page, setPage }: IPaginationProps) {
    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    return (
        <ul className={styles.pagination}>
            {pageNumbers.map((pageNumber) => (
                <li
                    key={pageNumber}
                    className={`${styles.pageItem} ${
                        pageNumber === page ? styles.active : ""
                    }`}
                    onClick={() => setPage(pageNumber)}
                >
                    {pageNumber}
                </li>
            ))}
        </ul>
    );
}

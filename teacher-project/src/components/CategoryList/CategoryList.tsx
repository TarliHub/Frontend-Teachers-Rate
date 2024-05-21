import styles from "./CategoryList.module.scss";
import { Link } from "react-router-dom";
import { ICategory } from "../../types/Category.interface";

interface ICategoryListProps {
    list?: ICategory[];
}

export function CategoryList({ list }: ICategoryListProps) {
    return (
        <div className={styles.categoryList}>
            <div className={styles.header}>
                <p className="flex-[3]">Номер</p>
                <p className="flex-[2]">Категорія</p>
                <div className="flex-1"></div>
            </div>
            {list?.map((item) => {
                return (
                    <div className={styles.categoryContainer} key={item.id}>
                        <div className="flex-[3]">
                            <p>{item.id}</p>
                        </div>
                        <p className="flex-1">{item.name}</p>

                        <div className={styles.buttonContainer}>
                            <Link
                                to={`/category/update-category/${item.id}`}
                                title="Змінити категорію"
                            >
                                <span className="material-symbols-outlined">
                                    edit
                                </span>
                            </Link>
                            <button title="Видалити категорію">
                                <span className="material-symbols-outlined">
                                    delete
                                </span>
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

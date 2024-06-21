import styles from "./CategoryList.module.scss";
import { ICategory } from "../../types/Category.interface";

interface ICategoryListProps {
    list?: ICategory[];
    handleDelete: (id: number) => void;
}

export function CategoryList({ list, handleDelete }: ICategoryListProps) {
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
                            <button
                                onClick={() => handleDelete(item.id)}
                                title="Видалити категорію"
                            >
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

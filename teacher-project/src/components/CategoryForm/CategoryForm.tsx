import styles from "./CategoryForm.module.scss";

import { SubmitHandler, useForm } from "react-hook-form";
import { ICategory } from "../../types/Category.interface";

export interface IUserFormProps {
    categoryData?: ICategory;
    handleCreateCategory: (data: ICategory) => void;
}

export function CategoryForm({
    categoryData,
    handleCreateCategory,
}: IUserFormProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICategory>();

    const onSubmit: SubmitHandler<ICategory> = (data) => {
        handleCreateCategory(data);
    };

    return (
        <form
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            className={styles.registrationForm}
        >
            <div className={styles.category}>
                <label>Категорія</label>
                <input
                    defaultValue={categoryData && categoryData.name}
                    placeholder="Введіть категорію"
                    {...register("name", {
                        required: "*категорія обов'язкове поле",
                    })}
                    type="text"
                />
                {errors.name && (
                    <div className={styles.errorText}>
                        {errors.name.message}
                    </div>
                )}
            </div>
            <div className={styles.button}>
                <button>Створити</button>
            </div>
        </form>
    );
}

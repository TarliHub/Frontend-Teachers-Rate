import styles from "./TaskForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { ITask } from "../../types/Task.interface";
import { ICategory } from "../../types/Category.interface";

export interface IUserFormProps {
    taskData?: ITask;
    handleCreateTask: (data: ITask) => void;
    categories?: ICategory[];
}

export function TaskForm({
    taskData,
    handleCreateTask,
    categories,
}: IUserFormProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ITask>();

    const onSubmit: SubmitHandler<ITask> = (data) => {
        data.points = [10];
        handleCreateTask(data);
    };

    return (
        <form
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            className={styles.registrationForm}
        >
            <div className={styles.title}>
                <label>Назва</label>
                <input
                    defaultValue={taskData && taskData.title}
                    placeholder="Введіть назву завдання"
                    {...register("title", {
                        required: "*назва обов'язкове поле",
                    })}
                    type="text"
                />
                {errors.title && (
                    <div className={styles.errorText}>
                        {errors.title.message}
                    </div>
                )}
            </div>
            <div className={styles.pointsDescription}>
                <label>Опис</label>
                <input
                    defaultValue={taskData && taskData.pointsDescription}
                    placeholder="Введіть опис завдання"
                    type="text"
                    {...register("pointsDescription", {
                        required: "*опис обов'язкове поле",
                    })}
                />
                {errors.pointsDescription && (
                    <div className={styles.errorText}>
                        {errors.pointsDescription.message}
                    </div>
                )}
            </div>
            <div className={styles.approval}>
                <label>Умова виконання завдання</label>
                <input
                    defaultValue={taskData && taskData.approval}
                    placeholder="Введіть умову завдання"
                    type="text"
                    {...register("approval", {
                        required: "*умова обов'язкове поле",
                    })}
                />
                {errors.approval && (
                    <div className={styles.errorText}>
                        {errors.approval.message}
                    </div>
                )}
            </div>
            <div className={styles.category}>
                <label>Категорія</label>
                <select
                    defaultValue={taskData && taskData.category?.id}
                    {...register("categoryId", {
                        required: "*категорія обов'язкове поле",
                    })}
                >
                    <option value="">Виберіть категорію</option>
                    {categories?.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {errors.categoryId && (
                    <div className={styles.errorText}>
                        {errors.categoryId?.message}
                    </div>
                )}
            </div>
            <div className={styles.button}>
                <button type="submit">Створити</button>
            </div>
        </form>
    );
}

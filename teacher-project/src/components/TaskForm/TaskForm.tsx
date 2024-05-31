import { ChangeEvent, useState } from "react";
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

    const [points, setPoints] = useState<number[]>(taskData?.points || []);

    const handleRemovePoint = (index: number) => {
        if (points.length > 1) {
            const newPoints = [...points];
            newPoints.splice(index, 1);
            setPoints(newPoints);
        }
    };

    const onSubmit: SubmitHandler<ITask> = (data) => {
        const taskWithPoints: ITask = {
            ...data,
            points: points,
        };
        handleCreateTask(taskWithPoints);
    };

    const handlePointsChange = (
        event: ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        if (index === points.length - 1) {
            const newPoints = [...points];
            newPoints[index] = parseInt(event.target.value);
            setPoints(newPoints);
        } else {
            const newPoints = [...points];
            newPoints[index] = parseInt(event.target.value);
            setPoints(newPoints);
        }
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                void handleSubmit(onSubmit)(event);
            }}
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
                        {errors.categoryId.message}
                    </div>
                )}
            </div>
            <div className="flex flex-col">
                <label>Оцінки</label>
                {points.map((point, index) => (
                    <div key={index} className={styles.pointInput}>
                        <input
                            type="number"
                            value={point}
                            onChange={(event) =>
                                handlePointsChange(event, index)
                            }
                            placeholder={`Оцінка ${index + 1}`}
                            min={0}
                            max={100}
                        />
                        <button
                            type="button"
                            onClick={() => handleRemovePoint(index)}
                        >
                            Видалити
                        </button>
                    </div>
                ))}
                <button type="button" onClick={() => setPoints([...points, 0])}>
                    Додати оцінку
                </button>
            </div>

            <div className={styles.button}>
                <button type="submit">Створити</button>
            </div>
        </form>
    );
}

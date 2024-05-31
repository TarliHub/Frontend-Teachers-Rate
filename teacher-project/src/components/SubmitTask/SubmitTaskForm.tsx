import styles from "./SubmitTaskForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISubmitTask } from "../../types/Task.interface";

interface ISubmitTaskFormProps {
    handleSubmitTask: (data: ISubmitTask) => void;
    points?: number[];
    taskId: number;
}

export function SubmitTaskForm({
    handleSubmitTask,
    points,
    taskId,
}: ISubmitTaskFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISubmitTask>();

    const onSubmit: SubmitHandler<ISubmitTask> = (data) => {
        const dataWithTaskId: ISubmitTask = {
            ...data,
            taskId: taskId,
        };
        handleSubmitTask(dataWithTaskId);
    };

    return (
        <form
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            className={styles.registrationForm}
        >
            <div className={styles.description}>
                <label>Опис</label>
                <input
                    placeholder="Введіть опис завдання"
                    type="text"
                    {...register("description", {
                        required: "*опис обов'язкове поле",
                    })}
                />
                {errors.description && (
                    <div className={styles.errorText}>
                        {errors.description.message}
                    </div>
                )}
            </div>
            <div className={styles.approvalLink}>
                <label>Посилання на підтвердження</label>
                <input
                    placeholder="Введіть посилання на підтвердження"
                    type="text"
                    {...register("approvalLink", {
                        required: "*посилання на підтвердження поле",
                    })}
                />
                {errors.approvalLink && (
                    <div className={styles.errorText}>
                        {errors.approvalLink.message}
                    </div>
                )}
            </div>
            <div className={styles.points}>
                <label>Оцінка</label>
                <select
                    {...register("points", {
                        required: "*оцінка обов'язкове поле",
                    })}
                >
                    <option value="">Виберіть оцінку</option>
                    {points?.map((point, value) => (
                        <option key={value} value={point}>
                            {point}
                        </option>
                    ))}
                </select>
                {errors.points && (
                    <div className={styles.errorText}>
                        {errors.points?.message}
                    </div>
                )}
            </div>
            <div className={styles.button}>
                <button type="submit">Створити</button>
            </div>
        </form>
    );
}

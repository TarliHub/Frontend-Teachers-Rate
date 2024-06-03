import styles from "./SubmitTaskForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISubmitTask } from "../../types/Task.interface";
import { useState } from "react";

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

    const [select, setSelect] = useState<boolean>(false);

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
                    placeholder="Введіть опис показника"
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
                <label>Підтвердження</label>
                <input
                    placeholder="Введіть підтвердження"
                    type="text"
                    {...register("approvalLink", {
                        required: "*підтвердження обов'язкове поле",
                    })}
                />
                {errors.approvalLink && (
                    <div className={styles.errorText}>
                        {errors.approvalLink.message}
                    </div>
                )}
            </div>
            <div className={styles.toggleSelect}>
                <button
                    className="bg-primaryBlue p-2 rounded-md text-white hover:bg-secondaryBlue"
                    type="button"
                    onClick={() => setSelect(!select)}
                >
                    {select ? "Вибрати оцінку" : "Вписати оцінку"}
                </button>
            </div>
            <div className={styles.points}>
                <label>Оцінка</label>
                {select ? (
                    <input
                        placeholder="Введіть бал"
                        type="text"
                        {...register("points", {
                            required: "*бал обов'язкове поле",
                        })}
                    />
                ) : (
                    <select
                        {...register("points", {
                            required: "*бал обов'язкове поле",
                        })}
                    >
                        <option value="">Виберіть бал</option>
                        {points?.map((point, value) => (
                            <option key={value} value={point}>
                                {point}
                            </option>
                        ))}
                    </select>
                )}
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

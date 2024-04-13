import { IUserUpdate } from "../../types/User.interface";
import { InputError } from "../InputError/InputError";
import styles from "./UpdateUser.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";

interface IUpdateUserProps {}

export function UpdateUser({}: IUpdateUserProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserUpdate>();

    const onSubmit: SubmitHandler<IUserUpdate> = (data) => {
        // handleAuth(data as ICredentials);
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.updateUserForm}
        >
            <div className={styles.header}>
                <h1>Змінити дані викладача</h1>
            </div>
            <div className={styles.name}>
                <label>Ім&apos;я</label>
                <input
                    //TODO: Set value from props
                    placeholder="Введіть ім'я викладача"
                    {...register("name", {
                        required: "*name is required field",
                        maxLength: {
                            value: 30,
                            message: "*name cannot exceed 30 characters",
                        },
                        pattern: {
                            value: /^[А-ЯҐЄІЇA-Z'][а-яґєіїa-z']*$/,
                            message:
                                "*please enter a valid name starting with a capital letter and without spaces",
                        },
                    })}
                    defaultValue={"Діма"}
                    type="text"
                />
                {errors.name && (
                    <div className={styles.errorText}>
                        {errors.name.message}
                    </div>
                )}
            </div>
            <div className={styles.lastName}>
                <label>Прізвище</label>
                <input
                    //TODO: Set value from props
                    placeholder="Введіть прізвище викладача"
                    {...register("lastName", {
                        required: "*last name is required field",
                        maxLength: {
                            value: 30,
                            message: "*last name cannot exceed 30 characters",
                        },
                        pattern: {
                            value: /^[А-ЯҐЄІЇA-Z'][а-яґєіїa-z']*$/,
                            message:
                                "*please enter a valid last name starting with a capital letter and without spaces",
                        },
                    })}
                    type="text"
                    defaultValue={"Гнідий"}
                />
                {errors.lastName && (
                    <div className={styles.errorText}>
                        {errors.lastName.message}
                    </div>
                )}
            </div>
            <div className={styles.email}>
                <label>Електрона пошта</label>
                <input
                    placeholder="Введіть електрону пошту викладача"
                    {...register("email", {
                        required: "*email is required field",
                        maxLength: {
                            value: 30,
                            message: "*email cannot exceed 30 characters",
                        },
                        pattern: {
                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            message: "*please enter vaild email",
                        },
                    })}
                    type="text"
                    defaultValue={"admin@example.com"}
                />
                {errors.email && (
                    <div className={styles.errorText}>
                        {errors.email.message}
                    </div>
                )}
            </div>
            <div className={styles.password}>
                <label>Пароль</label>
                <input
                    placeholder="Введіть пароль"
                    {...register("password", {
                        required: "*password is required field",
                        maxLength: {
                            value: 30,
                            message: "*password cannot exceed 30 characters",
                        },
                        minLength: {
                            value: 5,
                            message:
                                "*password must be at least 5 characters long",
                        },
                    })}
                    type="text"
                    defaultValue={"123456"}
                />
                {errors.password && (
                    <div className={styles.errorText}>
                        {errors.password.message}
                    </div>
                )}
            </div>
            <div className={styles.role}>
                <label>Роль</label>
                <select {...register("role")} defaultValue={"teacher"}>
                    <option value="" disabled hidden>
                        Оберіть роль
                    </option>
                    <option value="teacher">Викладач</option>
                    <option value="headCC">Голова ЦК</option>
                    <option value="admin">Адміністратор</option>
                </select>
            </div>
            <div className={styles.button}>
                <button>Обновити дані</button>
            </div>
        </form>
    );
}

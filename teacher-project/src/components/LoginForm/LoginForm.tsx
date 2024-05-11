import styles from "./LoginForm.module.scss";

import { SubmitHandler, useForm } from "react-hook-form";

import { ILoginFields } from "../../types/Auth.interface.ts";

interface ILoginFormProps {
    handleLoginUser: (data: ILoginFields) => void;
}

export function LoginForm({ handleLoginUser }: ILoginFormProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFields>();

    const onSubmit: SubmitHandler<ILoginFields> = (data) => {
        handleLoginUser(data);
    };

    return (
        <form
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            className={styles.loginForm}
        >
            <div className={styles.header}>
                <h1>Увійти</h1>
            </div>
            <div className={styles.email}>
                <label>Електронна пошта</label>
                <input
                    placeholder="Введіть електронну пошту"
                    {...register("email", {
                        required: "*електронна пошта обов'язкове поле",
                        maxLength: {
                            value: 30,
                            message:
                                "*електронна пошта не може мати більше 30 символів",
                        },
                        pattern: {
                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            message: "*введіть правильну електронну пошту",
                        },
                    })}
                    type="text"
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
                        required: "*пароль обов'язкове поле",
                        minLength: {
                            value: 8,
                            message: "*пароль має містити мінімум 8 символів",
                        },
                        maxLength: {
                            value: 30,
                            message: "*пароль не може мати більше 30 символів",
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
                            message:
                                "*пароль має містити великі і малі символи, латинські літери та числа",
                        },
                    })}
                    type="text"
                />
                {errors.password && (
                    <div className={styles.errorText}>
                        {errors.password.message}
                    </div>
                )}
                <div className={styles.button}>
                    <button>Увійти</button>
                </div>
            </div>
        </form>
    );
}

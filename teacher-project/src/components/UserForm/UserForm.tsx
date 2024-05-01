import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFields } from "../../types/Authorization.interface.ts";
import styles from "./UserForm.module.scss";
import { useState } from "react";

export function UserForm(): JSX.Element {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IRegisterFields>();

    const password = watch("password");

    const onSubmit: SubmitHandler<IRegisterFields> = (data) => {
        console.log(data);
        return data;
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.registrationForm}
        >
            <div className={styles.header}>
                <h1>Створити користувача</h1>
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
                    type={isPasswordVisible ? "text" : "password"}
                />
                <button
                    type="button"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                    {isPasswordVisible ? "сховати" : "показати"}
                </button>
                {errors.password && (
                    <div className={styles.errorText}>
                        {errors.password.message}
                    </div>
                )}
            </div>
            <div className={styles.password}>
                <label>Підтвердіть пароль</label>
                <input
                    placeholder="Введіть пароль ще раз"
                    {...register("confirmPassword", {
                        validate: (value) =>
                            value === password || "*паролі не співпадають",
                    })}
                    type={isConfirmPasswordVisible ? "text" : "password"}
                />
                <button
                    type="button"
                    onClick={() =>
                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                    }
                >
                    {isConfirmPasswordVisible ? "сховати" : "показати"}
                </button>
                {errors.confirmPassword && (
                    <div className={styles.errorText}>
                        {errors.confirmPassword.message}
                    </div>
                )}
            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.button}>
                    <button>Створити</button>
                </div>
            </div>
        </form>
    );
}

import styles from "./UserForm.module.scss";

import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

import showIcon from "../../assets/icons/visible.png";
import hideIcon from "../../assets/icons/invisible.png";
import { ICreateUserFields } from "../../types/UserFields";

export function UserForm(): JSX.Element {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<ICreateUserFields>();

    const password = watch("password");

    const onSubmit: SubmitHandler<ICreateUserFields> = (data) => {
        console.log(data);
        return data;
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.registrationForm}
        >
            <div className={styles.surname}>
                <label>Прізвище</label>
                <input
                    placeholder="Прізвище"
                    {...register("surname", {
                        required: "*прізвище обов'язкове поле",
                        pattern: {
                            value: /^[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']{0,14}$/,
                            message:
                                "*прізвище має починатися з великої літери і містити максимум 15 символів",
                        },
                    })}
                    type="text"
                />
                {errors.surname && (
                    <div className={styles.errorText}>
                        {errors.surname.message}
                    </div>
                )}
            </div>
            <div className={styles.name}>
                <label>Ім&apos;я</label>
                <input
                    placeholder="Ім'я"
                    {...register("name", {
                        required: "*ім'я обов'язкове поле",
                        pattern: {
                            value: /^[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']{0,14}$/,
                            message:
                                "*ім'я має починатися з великої літери і містити максимум 15 символів",
                        },
                    })}
                    type="text"
                />
                {errors.name && (
                    <div className={styles.errorText}>
                        {errors.name.message}
                    </div>
                )}
            </div>
            <div className={styles.patronymic}>
                <label>По-батькові</label>
                <input
                    placeholder="По-батькові"
                    {...register("patronymic", {
                        required: "*по-батькові обов'язкове поле",
                        pattern: {
                            value: /^[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']{0,14}$/,
                            message:
                                "*по-батькові має починатися з великої літери і містити максимум 15 символів",
                        },
                    })}
                    type="text"
                />
                {errors.patronymic && (
                    <div className={styles.errorText}>
                        {errors.patronymic.message}
                    </div>
                )}
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
                <div className={styles.input}>
                    <input
                        placeholder="Введіть пароль"
                        {...register("password", {
                            required: "*пароль обов'язкове поле",
                            minLength: {
                                value: 8,
                                message:
                                    "*пароль має містити мінімум 8 символів",
                            },
                            maxLength: {
                                value: 30,
                                message:
                                    "*пароль не може мати більше 30 символів",
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
                        {isPasswordVisible ? (
                            <img
                                className="w-[26px]"
                                src={hideIcon}
                                alt="Hide Icon"
                            />
                        ) : (
                            <img
                                className="w-[26px]"
                                src={showIcon}
                                alt="Show Icon"
                            />
                        )}
                    </button>
                </div>
                {errors.password && (
                    <div className={styles.errorText}>
                        {errors.password.message}
                    </div>
                )}
            </div>
            <div className={styles.password}>
                <label>Підтвердіть пароль</label>
                <div className={styles.input}>
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
                            setIsConfirmPasswordVisible(
                                !isConfirmPasswordVisible
                            )
                        }
                    >
                        {isConfirmPasswordVisible ? (
                            <img
                                className="w-[26px]"
                                src={hideIcon}
                                alt="Hide Icon"
                            />
                        ) : (
                            <img
                                className="w-[26px]"
                                src={showIcon}
                                alt="Show Icon"
                            />
                        )}
                    </button>
                </div>
                {errors.confirmPassword && (
                    <div className={styles.errorText}>
                        {errors.confirmPassword.message}
                    </div>
                )}
            </div>
            <div className={styles.button}>
                <button>Створити</button>
            </div>
        </form>
    );
}

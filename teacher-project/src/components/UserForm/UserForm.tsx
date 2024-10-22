import styles from "./UserForm.module.scss";

import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";

import showIcon from "../../assets/icons/visible.png";
import hideIcon from "../../assets/icons/invisible.png";

import { IUser } from "../../types/User.interface";

import { ROUTES } from "../../constants/routes";

export interface IUserFormProps {
    userData?: IUser;
    handleUser: (data: IUser) => void;
    updateForm?: boolean;
}

export function UserForm({
    userData,
    handleUser,
    updateForm,
}: IUserFormProps): JSX.Element {
    const { role } = useContext(AuthContext);

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IUser>();

    const password = watch("password");

    const onSubmit: SubmitHandler<IUser> = (data) => {
        handleUser(data);
    };

    return (
        <form
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            className={styles.registrationForm}
        >
            {role === 0 && (
                <div className={styles.surname}>
                    <label>Назва циклової комісії</label>
                    <input
                        defaultValue={userData && userData.commissionName}
                        placeholder="Введіть назву циклової комісії"
                        {...register("commissionName", {
                            required: "*циклова комісія обов'язкове поле",
                        })}
                        type="text"
                    />
                    {errors.commissionName && (
                        <div className={styles.errorText}>
                            {errors.commissionName.message}
                        </div>
                    )}
                </div>
            )}
            <div className={styles.surname}>
                <label>Прізвище</label>
                <input
                    defaultValue={userData && userData.lastName}
                    placeholder="Введіть прізвище"
                    {...register("lastName", {
                        required: "*прізвище обов'язкове поле",
                        pattern: {
                            value: /^[А-ЩЬЮЯҐЄІЇA-Z][а-щьюяґєіїA-Za-z']{0,14}$/,
                            message:
                                "*прізвище має починатися з великої літери і містити максимум 15 символів",
                        },
                    })}
                    type="text"
                />
                {errors.lastName && (
                    <div className={styles.errorText}>
                        {errors.lastName.message}
                    </div>
                )}
            </div>
            <div className={styles.name}>
                <label>Ім&apos;я</label>
                <input
                    defaultValue={userData && userData.name}
                    placeholder="Введіть ім'я"
                    {...register("name", {
                        required: "*ім'я обов'язкове поле",
                        pattern: {
                            value: /^[А-ЩЬЮЯҐЄІЇA-Z][а-щьюяґєіїA-Za-z']{0,14}$/,
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
                <label>Ім&apos;я по-батькові</label>
                <input
                    defaultValue={userData && userData.middleName}
                    placeholder="Введіть ім'я по-батькові"
                    {...register("middleName", {
                        required: "*ім'я по-батькові обов'язкове поле",
                        pattern: {
                            value: /^[А-ЩЬЮЯҐЄІЇA-Z][а-щьюяґєіїA-Za-z']{0,14}$/,
                            message:
                                "*ім'я по-батькові має починатися з великої літери і містити максимум 15 символів",
                        },
                    })}
                    type="text"
                />
                {errors.middleName && (
                    <div className={styles.errorText}>
                        {errors.middleName.message}
                    </div>
                )}
            </div>
            <div className={styles.email}>
                <label>Електронна пошта</label>
                <input
                    defaultValue={userData && userData.email}
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
            {(userData ||
                useLocation().pathname ===
                    `${ROUTES.TEACHERS}${ROUTES.CREATE_USER}`) && (
                <>
                    {updateForm ? (
                        <div className={styles.password}>
                            <label>Пароль</label>
                            <div className={styles.input}>
                                <input
                                    placeholder="Введіть пароль"
                                    {...register("password", {})}
                                    type={
                                        isPasswordVisible ? "text" : "password"
                                    }
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsPasswordVisible(!isPasswordVisible)
                                    }
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
                    ) : (
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
                                    type={
                                        isPasswordVisible ? "text" : "password"
                                    }
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsPasswordVisible(!isPasswordVisible)
                                    }
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
                    )}
                    {updateForm ? (
                        <></>
                    ) : (
                        <div className={styles.password}>
                            <label>Підтвердіть пароль</label>
                            <div className={styles.input}>
                                <input
                                    placeholder="Введіть пароль ще раз"
                                    {...register("confirmPassword", {
                                        validate: (value) =>
                                            value === password ||
                                            "*паролі не співпадають",
                                    })}
                                    type={
                                        isConfirmPasswordVisible
                                            ? "text"
                                            : "password"
                                    }
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
                    )}
                </>
            )}
            <div className={styles.button}>
                <button>Створити</button>
            </div>
        </form>
    );
}

import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFields } from "../../types/authorization.interface";
import styles from "./RegistrationForm.module.scss";
import { InputError } from "../InputError/InputError";
import { ROUTES } from "../../constants/routes";
import { Link } from "react-router-dom";

export function RegistrationForm(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IRegisterFields>();

    const password = watch("password");

    const onSubmit: SubmitHandler<IRegisterFields> = (data) => {
        // handleAuth(data as ICredentials);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.registrationForm}
        >
            <div className={styles.header}>
                <h1>Зареєструватися</h1>
            </div>
            <div className={styles.email}>
                <label>Електрона пошта</label>
                <input
                    placeholder="Введіть електрону пошту"
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
                />
                {errors.email && (
                    <InputError errorMessage={errors.email.message} />
                )}
            </div>
            <div className={styles.password}>
                <label>Пароль</label>
                <input
                    placeholder="Введіть пароль"
                    {...register("password", {
                        required: "*password is required field",
                        minLength: {
                            value: 5,
                            message:
                                "*password must be at least 5 characters long",
                        },
                    })}
                    type="password"
                />
                {errors.password && (
                    <InputError errorMessage={errors.password.message} />
                )}
            </div>
            <div className={styles.password}>
                <label>Підтвердіть пароль</label>
                <input
                    placeholder="Введіть пароль ще раз"
                    {...register("confirmPassword", {
                        validate: (value) =>
                            value === password || "*passwords do not match",
                    })}
                    type="password"
                />
                {errors.confirmPassword && (
                    <InputError errorMessage={errors.confirmPassword.message} />
                )}
            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.button}>
                    <button>Зареєструватися</button>
                </div>
                <p className={styles.askText}>у вас вже є акаунт?</p>
                <div className={styles.bottomNav}>
                    <Link to={ROUTES.LOGIN}>увійти</Link>
                </div>
            </div>
        </form>
    );
}

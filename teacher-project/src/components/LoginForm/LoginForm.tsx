import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFields } from "../../types/Authorization.interface.ts";
import styles from "./LoginForm.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export function LoginForm(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFields>();

    const onSubmit: SubmitHandler<ILoginFields> = (data) => {
        // handleAuth(data as ICredentials);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
            <div className={styles.header}>
                <h1>Увійти</h1>
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
                />
                {errors.password && (
                    <div className={styles.errorText}>
                        {errors.password.message}
                    </div>
                )}
            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.button}>
                    <button>Увійти</button>
                </div>
                <p className={styles.askText}>
                    у вас ще немає облікового запису?
                </p>
                <div className={styles.bottomNav}>
                    <Link to={ROUTES.REGISTRATION}>зареєструватися</Link>
                </div>
            </div>
        </form>
    );
}

import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFields } from "../../types/authorization.interface";
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
                <h1>Увійти як студент</h1>
            </div>
            <div className={styles.email}>
                <label>Електрона пошта</label>
                <input
                    placeholder="Введіть електрону пошту"
                    {...register("email", {
                        required: "Email is required field",
                        maxLength: {
                            value: 30,
                            message: "Email cannot exceed 30 characters",
                        },
                        pattern: {
                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Please enter vaild email",
                        },
                    })}
                    type="text"
                />
                {/* {errors.email && <ErrorForm message={errors.email.message} />} */}
            </div>
            <div className={styles.password}>
                <label>Пароль</label>
                <input
                    placeholder="Введіть пароль"
                    {...register("password", {
                        required: "Password is required field",
                        maxLength: {
                            value: 30,
                            message: "Password cannot exceed 30 characters",
                        },
                        minLength: {
                            value: 5,
                            message:
                                "Password must be at least 5 characters long",
                        },
                    })}
                    type="text"
                />
                {/* {errors.password && (
                    <ErrorForm message={errors.password.message} />
                )} */}
            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.button}>
                    <button>Увійти</button>
                </div>
                <p>у вас ще немає облікового запису?</p>
                <div className={styles.bottomNav}>
                    <Link to={ROUTES.REGISTRATION}>зареєструватися</Link>
                    <p>або</p>
                    <Link>увійти як викладач</Link>
                </div>
            </div>
        </form>
    );
}

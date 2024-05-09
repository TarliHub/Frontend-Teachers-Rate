import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFields } from "../../types/auth.types.ts";
import styles from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";

interface ILoginFormProps {
    handleLoginUser: (data: ILoginFields) => void;
}

export function LoginForm({ handleLoginUser }: ILoginFormProps): JSX.Element {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFields>();

    const onSubmit: SubmitHandler<ILoginFields> = (data) => {
        handleLoginUser(data);
        try {
            navigate("/");
        } catch (error) {
            console.error(error);
        }
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
                        required: "*email is required field",
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
        </form>
    );
}

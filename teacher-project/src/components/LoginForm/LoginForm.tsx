import { SubmitHandler, useForm } from "react-hook-form";

export function LoginForm(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<ILoginFields> = (data) => {
        // handleAuth(data as ICredentials);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className="login-form__text">
                <h1>Log In</h1>
            </div>
            <div className="login-form__email">
                <label>e-mail</label>
                <input
                    placeholder="enter your e-mail here"
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
            <div className="login-form__password">
                <label>password</label>
                <input
                    placeholder="enter your password here"
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
            <div className="login-form__btn">
                <button>Submit</button>
            </div>
        </form>
    );
}

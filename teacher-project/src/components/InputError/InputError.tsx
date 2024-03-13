import styles from "./InputError.module.scss";

interface IInputErrorProps {
    errorMessage?: string;
}

export function InputError({ errorMessage }: IInputErrorProps): JSX.Element {
    return <div className={styles.errorText}>{errorMessage}</div>;
}

import { SubmitHandler, useForm } from "react-hook-form";
import { ITask } from "../../types/Task.interface";

interface ITaskFormProps {
    handleCreateTask: (data: ITask) => void;
}

export function TaskForm({ handleCreateTask }: ITaskFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit: SubmitHandler<ITask> = (data) => handleCreateTask(data);

    return (
        <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
            <div>
                <label>Title</label>
                <input {...register("title", { required: true })} type="text" />
                {errors.title && <span>This field is required</span>}
            </div>

            <div>
                <label>Points Description</label>
                <input
                    {...register("pointsDescription", { required: true })}
                    type="text"
                />
                {errors.pointsDescription && (
                    <span>This field is required</span>
                )}
            </div>

            <div>
                <label>Approval</label>
                <input
                    {...register("approval", { required: true })}
                    type="text"
                />
                {errors.approval && <span>This field is required</span>}
            </div>

            <div>
                <label>Category Id</label>
                <input
                    {...register("category.id", { required: true })}
                    type="number"
                />
                {errors.category?.id && <span>This field is required</span>}
            </div>

            <div>
                <label>Category Name</label>
                <input
                    {...register("category.name", { required: true })}
                    type="text"
                />
                {errors.category?.name && <span>This field is required</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

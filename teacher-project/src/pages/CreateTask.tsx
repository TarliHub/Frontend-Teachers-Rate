import { TaskForm } from "../components/TaskForm/TaskForm";
import { useCreateOne } from "../hooks/useCreateOne";
import { useList } from "../hooks/useList";
import { ICategoryList } from "../types/Category.interface";
import { ITask } from "../types/Task.interface";

export function CreateTask() {
    const CreateTask = useCreateOne<ITask>("tasks", "tasks");

    const { data } = useList<ICategoryList>("category", 0, "category");

    const handleCreateTask = (data: ITask) => {
        CreateTask.mutate({
            data,
            route: "tasks",
        });
    };

    return (
        <div>
            <TaskForm
                categories={data?.items}
                handleCreateTask={handleCreateTask}
            />
        </div>
    );
}

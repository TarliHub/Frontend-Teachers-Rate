import { TaskForm } from "../components/TaskForm/TaskForm";
import { useCreateOne } from "../hooks/useCreateOne";
import { ITask } from "../types/Task.interface";

export function CreateTask() {
    const CreateTask = useCreateOne<ITask>("tasks");

    const handleCreateTask = (data: ITask) => {
        CreateTask.mutate({
            data,
            route: "tasks",
        });
    };

    return (
        <div>
            <TaskForm handleCreateTask={handleCreateTask} />
        </div>
    );
}

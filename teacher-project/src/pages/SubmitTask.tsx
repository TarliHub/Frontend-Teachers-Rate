import { useParams } from "react-router-dom";
import { SubmitTaskForm } from "../components/SubmitTask/SubmitTaskForm";
import { useCreateOne } from "../hooks/useCreateOne";
import { ISubmitTask, ITask } from "../types/Task.interface";
import { useGetOne } from "../hooks/useGetOne";

export function SubmitTask() {
    const { id } = useParams();
    const taskId = id !== undefined ? parseInt(id) : 0;

    const SubmitTask = useCreateOne<ISubmitTask>("completed-tasks", "tasks");

    const handlSubmitTask = (data: ISubmitTask) => {
        SubmitTask.mutate({
            data,
            route: "tasks/send-request",
        });
    };

    const pointsData = useGetOne<ITask>(taskId, "tasks", "tasks");
    const points = pointsData.data?.points;

    return (
        <div>
            <SubmitTaskForm
                handleSubmitTask={handlSubmitTask}
                points={points}
                taskId={taskId}
            />
        </div>
    );
}
